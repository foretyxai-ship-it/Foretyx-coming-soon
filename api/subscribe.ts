import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// 1. Load Environment Variables
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// Fail early if keys are missing
if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !RESEND_API_KEY) {
  console.error("❌ MISSING KEYS: Ensure your .env file is in the root folder.");
}

const supabase = createClient(SUPABASE_URL || '', SUPABASE_ANON_KEY || '');
const resend = new Resend(RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email is required' });
  }

  try {
    console.log(`--- Processing Subscription for: ${email} ---`);

    // 2. Save to Supabase
    // Note: Table name must be lowercase 'waitlist'
    const { error: supabaseError } = await supabase
      .from('waitlist')
      .insert([{ email }]);

    if (supabaseError) {
      // If the email already exists, Supabase might return a 409 error
      console.error("❌ Supabase Error:", supabaseError.message);
      throw new Error(`Database error: ${supabaseError.message}`);
    }
    console.log("✅ Saved to Supabase");

    // 3. Send Confirmation via Resend
    // IMPORTANT: On the free tier, Resend may only deliver to your own account email
    // until you verify the 'foretyx.ai' domain.
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Foretyx <onboarding@resend.dev>', 
      to: email,
      subject: 'Waitlist Confirmed | Foretyx',
      html: `
        <div style="font-family: sans-serif; background: #000; color: #fff; padding: 40px; border-radius: 12px; border: 1px solid #333; max-width: 600px; margin: auto;">
          <h2 style="color: #10b981; margin-top: 0;">You're on the list.</h2>
          <p style="color: #ccc; line-height: 1.6; font-size: 16px;">
            Thank you for joining the <strong>Foretyx</strong> waitlist. We're building the future of enterprise AI security, and we'll notify you the moment we're ready for your team.
          </p>
          <hr style="border: none; border-top: 1px solid #333; margin: 30px 0;" />
          <p style="font-size: 12px; color: #666; text-align: center;">
            © ${new Date().getFullYear()} Foretyx, Inc. <br/> Secure. Private. Enterprise-Ready.
          </p>
        </div>
      `
    });

    if (emailError) {
      // Log the specific Resend error but let the user see a 'success' because DB worked
      console.error("⚠️ Resend Error:", emailError.message);
    } else {
      console.log("📧 Resend accepted email:", emailData?.id);
    }

    return res.status(200).json({ success: true });

  } catch (err: any) {
    console.error("❌ Server Error:", err.message);
    return res.status(500).json({ 
      error: err.message || "Internal Server Error",
      details: "Check terminal for more information." 
    });
  }
}