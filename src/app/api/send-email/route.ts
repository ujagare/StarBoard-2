import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactEmailTemplate from '@/emails/ContactEmailTemplate';
import PopupFormEmailTemplate from '@/emails/PopupFormEmailTemplate';

type RawFormData = Record<string, unknown>;

const recipientEmail = process.env.CONTACT_EMAIL_TO || 'connect@starboardrealtors.co.in';
const senderEmail = process.env.CONTACT_EMAIL_FROM || 'Starboard Realtors <noreply@starboardrealtors.co.in>';

function toText(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, 500) : '';
}

function normalizePhone(value: unknown) {
  const digits = toText(value).replace(/\D/g, '');

  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }

  return digits.slice(0, 15);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getValidatedFormData(body: RawFormData) {
  const formType = body.formType === 'popup' ? 'popup' : 'contact';
  const email = toText(body.email).toLowerCase();
  const phone = normalizePhone(body.phone);
  const location = toText(body.location);

  if (!email || !isValidEmail(email)) {
    return { error: 'Please enter a valid email address.' };
  }

  if (!phone || phone.length < 10) {
    return { error: 'Please enter a valid phone number.' };
  }

  if (formType === 'popup') {
    const name = toText(body.name);

    if (!name) {
      return { error: 'Please enter your full name.' };
    }

    return {
      formType,
      formData: {
        name,
        phone,
        email,
        requirement: toText(body.requirement) || undefined,
        location: location || undefined,
      },
    };
  }

  const firstName = toText(body.firstName);
  const lastName = toText(body.lastName);
  const name = toText(body.name) || `${firstName} ${lastName}`.trim();

  if (!name) {
    return { error: 'Please enter your name.' };
  }

  return {
    formType,
    formData: {
      firstName,
      lastName,
      name,
      phone,
      email,
      location: location || undefined,
    },
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const validated = getValidatedFormData(body as RawFormData);

  if ('error' in validated) {
    return NextResponse.json(
      { error: validated.error },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error('RESEND_API_KEY is not configured.');
    return NextResponse.json(
      { error: 'Email service is temporarily unavailable.' },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(resendApiKey);
    const { formType, formData } = validated;
    const emailTemplate = formType === 'popup'
      ? PopupFormEmailTemplate(formData)
      : ContactEmailTemplate(formData);

    // Resend does not throw on API-level failures (invalid key, unverified
    // domain, rate limit) — it resolves with an `error` field, so it must be
    // checked or the response would falsely report success.
    const { error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: formData.email,
      subject: formType === 'popup'
        ? `New Interest Registration - ${formData.requirement || 'General'}`
        : 'New Contact Form Submission',
      react: emailTemplate,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
