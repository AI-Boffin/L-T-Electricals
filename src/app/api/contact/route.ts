import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_FILES = 5;
const MAX_TOTAL_SIZE = 15 * 1024 * 1024;

function getTextValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const {
    CONTACT_FROM_EMAIL,
    CONTACT_TO_EMAIL,
    SMTP_HOST,
    SMTP_PASS,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    return Response.json(
      {
        error:
          "Email delivery is not configured yet. Add the SMTP settings and destination address first.",
      },
      { status: 503 },
    );
  }

  const formData = await request.formData();

  if (getTextValue(formData, "website")) {
    return Response.json({ message: "Thanks. Your enquiry has been sent." });
  }

  const name = getTextValue(formData, "name");
  const email = getTextValue(formData, "email");
  const phone = getTextValue(formData, "phone");
  const area = getTextValue(formData, "area");
  const service = getTextValue(formData, "service");
  const message = getTextValue(formData, "message");

  if (name.length < 2) {
    return Response.json(
      { error: "Please enter your name." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length < 20) {
    return Response.json(
      { error: "Please add a few more project details before sending." },
      { status: 400 },
    );
  }

  const files = formData
    .getAll("attachments")
    .filter((value): value is File => value instanceof File && value.size > 0);

  if (files.length > MAX_FILES) {
    return Response.json(
      { error: `Please attach up to ${MAX_FILES} files.` },
      { status: 400 },
    );
  }

  const totalSize = files.reduce((total, file) => total + file.size, 0);

  if (totalSize > MAX_TOTAL_SIZE) {
    return Response.json(
      { error: "Attachments need to stay under 15MB in total." },
      { status: 400 },
    );
  }

  const invalidFile = files.find(
    (file) =>
      !file.type.startsWith("image/") && !file.type.startsWith("video/"),
  );

  if (invalidFile) {
    return Response.json(
      { error: "Only image and video attachments are allowed." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    auth: {
      pass: SMTP_PASS,
      user: SMTP_USER,
    },
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: SMTP_SECURE === "true" || SMTP_PORT === "465",
  });

  const attachments = await Promise.all(
    files.map(async (file) => ({
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type,
      filename: file.name,
    })),
  );

  const attachmentSummary =
    attachments.length > 0
      ? attachments.map((file) => `<li>${escapeHtml(file.filename)}</li>`).join("")
      : "<li>No attachments supplied</li>";

  const textSummary =
    attachments.length > 0
      ? attachments.map((file) => `- ${file.filename}`).join("\n")
      : "- No attachments supplied";

  await transporter.sendMail({
    attachments,
    from: CONTACT_FROM_EMAIL ?? SMTP_USER,
    html: `
      <h2>New website enquiry for L&amp;T Electricals</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "Not supplied")}</p>
      <p><strong>Area:</strong> ${escapeHtml(area || "Not supplied")}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "General enquiry")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      <p><strong>Attachments:</strong></p>
      <ul>${attachmentSummary}</ul>
    `,
    replyTo: email,
    subject: `L&T Electricals enquiry: ${service || "General enquiry"} from ${name}`,
    text: `New website enquiry for L&T Electricals

Name: ${name}
Email: ${email}
Phone: ${phone || "Not supplied"}
Area: ${area || "Not supplied"}
Service: ${service || "General enquiry"}

Message:
${message}

Attachments:
${textSummary}
`,
    to: CONTACT_TO_EMAIL,
  });

  return Response.json({
    message: "Thanks. Your enquiry has been sent to Liam successfully.",
  });
}
