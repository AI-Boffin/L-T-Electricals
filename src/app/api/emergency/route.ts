import { Resend } from "resend";

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
  const { CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, RESEND_API_KEY } = process.env;

  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
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

  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/London",
  });

  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
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

  if (error) {
    console.error("Resend emergency email failed", error);
    return Response.json(
      {
        error:
          "Could not send the emergency request right now. Please call 07485 035381 directly.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    message: "Emergency request sent. Liam has been alerted and will call you back as soon as possible.",
  });
}
