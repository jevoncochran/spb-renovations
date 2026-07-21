import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, projectType, message } = await req.json();

  try {
    await resend.emails.send({
      from: "SPB Renovations <noreply@spbrenovations.com>",
      to: "contact@spbrenovations.com",
      replyTo: email,
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a1a; padding: 24px 32px;">
            <h1 style="color: #C9A227; margin: 0; font-size: 22px;">SPB Renovations</h1>
            <p style="color: #999; margin: 4px 0 0; font-size: 13px;">New Contact Form Submission</p>
          </div>
          <div style="padding: 32px; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px; font-weight: 600;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px; font-weight: 600;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px; font-weight: 600;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Project Type</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px; font-weight: 600;">${projectType || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #111; font-size: 14px;">${message || "No message provided"}</td>
              </tr>
            </table>
            <div style="margin-top: 32px; padding: 16px; background: #f9f9f9; border-radius: 6px;">
              <p style="margin: 0; font-size: 13px; color: #666;">Reply directly to this email to respond to ${firstName}.</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
