import nodemailer from "nodemailer";

export const runtime = "nodejs";

function getTextValue(payload: Record<string, unknown>, key: string) {
  const value = payload[key];
  return typeof value === "string" ? value.trim() : "";
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
          "Emergency notifications are not configured yet. Please call 07485 035381 directly.",
      },
      { status: 503 },
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = getTextValue(payload, "name");
  const phone = getTextValue(payload, "phone");
  const note = getTextValue(payload, "note");

  if (name.length < 2) {
    return Response.json(
      { error: "Please enter your name." },
      { status: 400 },
    );
  }

  const phoneDigits = phone.replace(/[^\d+]/g, "");
  if (phoneDigits.length < 7) {
    return Response.json(
      { error: "Please enter a valid callback number." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    auth: { pass: SMTP_PASS, user: SMTP_USER },
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: SMTP_SECURE === "true" || SMTP_PORT === "465",
  });

  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/London",
  });

  await transporter.sendMail({
    from: CONTACT_FROM_EMAIL ?? SMTP_USER,
    headers: {
      Importance: "high",
      "X-Priority": "1",
      "X-MSMail-Priority": "High",
    },
    html: `
      <h2 style="color:#ef4444;">EMERGENCY CALL OUT REQUEST</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Callback number:</strong> <a href="tel:${escapeHtml(phoneDigits)}">${escapeHtml(phone)}</a></p>
      ${note ? `<p><strong>Note:</strong> ${escapeHtml(note).replaceAll("\n", "<br />")}</p>` : ""}
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      <p style="margin-top:16px;color:#555;">Sent automatically from ltelectricals website.</p>
    `,
    priority: "high",
    subject: `EMERGENCY CALL OUT - ${name} - ${phone}`,
    text: `EMERGENCY CALL OUT REQUEST

Name: ${name}
Callback number: ${phone}
${note ? `Note: ${note}\n` : ""}
Submitted: ${submittedAt}

Sent automatically from ltelectricals website.
`,
    to: CONTACT_TO_EMAIL,
  });

  return Response.json({
    message: "Emergency request sent. Liam has been alerted and will call you back as soon as possible.",
  });
}
