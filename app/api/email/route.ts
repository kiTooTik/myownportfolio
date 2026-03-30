import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, subject, message } = body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { success: false, message: "Missing required fields." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";

    if (!gmailUser || !gmailPass) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email is not configured. Please set GMAIL_USER and GMAIL_PASS in environment variables.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: 465,
      secure: true, // Gmail with port 465 uses SSL
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: gmailUser, // must match the authenticated account
      to: gmailUser,
      replyTo: email,
      subject,
      html: `<div>
  <div><strong>${name}</strong></div>
  <div>${email}</div>
  <hr />
  <div><strong>${subject}</strong></div>
  <div>${message}</div>
</div>`,
    });

    return NextResponse.json(
      { success: true, message: "Email Sent" },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { success: false, message: err.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}

