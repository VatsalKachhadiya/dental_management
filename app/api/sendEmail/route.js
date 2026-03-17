import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate from '@/emails';

export async function POST(req) {
  const response = await req.json();
  const result = response?.data;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      { error: 'Missing RESEND_API_KEY environment variable.' },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(resendApiKey);
    const data = await resend.emails.send({
      from: 'Doctor-Appointment-Booking@tubeguruji-app.tubeguruji.com',
      to: [result?.Email],
      subject: 'Appointment Booking Confirmation',
      react: EmailTemplate(result),
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
