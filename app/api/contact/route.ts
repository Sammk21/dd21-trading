// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

// Google Sheets setup
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
      /\\n/g,
      "\n"
    ),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save to Google Sheets
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A:F", // Adjust range as needed
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              new Date().toISOString(),
              name,
              email,
              phone,
              subject || "General Inquiry",
              message,
            ],
          ],
        },
      });
    } catch (sheetsError) {
      console.error("Google Sheets error:", sheetsError);
      // Continue even if sheets fails
    }

    // Send email to admin
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "noreply@yourdomain.com",
      to: process.env.ADMIN_EMAIL || "admin@yourdomain.com",
      subject: `New Contact Form Submission - ${subject || "General Inquiry"}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .card { background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden; }
              .header { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 30px 20px; text-align: center; }
              .content { padding: 30px; }
              .field { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb; }
              .label { font-weight: 600; color: #374151; margin-bottom: 5px; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px; }
              .value { color: #1f2937; font-size: 14px; line-height: 1.5; }
              .message-box { background: #f9fafb; border-left: 4px solid #3b82f6; padding: 15px; border-radius: 0 8px 8px 0; }
              .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; }
              .urgency { background: #fef3cd; border: 1px solid #f59e0b; padding: 12px; border-radius: 6px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="card">
                <div class="header">
                  <h1 style="margin: 0; font-size: 24px;">📧 New Contact Form Submission</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone is interested in your financial services!</p>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Full Name</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email Address</div>
                    <div class="value"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Phone Number</div>
                    <div class="value"><a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Service Interest</div>
                    <div class="value">${subject || "General Inquiry"}</div>
                  </div>
                  <div class="field" style="border-bottom: none;">
                    <div class="label">Message</div>
                    <div class="message-box">
                      <div class="value">${message}</div>
                    </div>
                  </div>
                  <div class="urgency">
                    <strong>⏰ Response Time:</strong> Please respond within 24 hours for the best client experience.
                  </div>
                </div>
                <div class="footer">
                  <p>This email was sent automatically from your website contact form.</p>
                  <p>Timestamp: ${new Date().toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                  })}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Send thank you email to user
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "noreply@yourdomain.com",
      to: email,
      subject: "Thank you for contacting us! 🎯",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You - We'll Be In Touch Soon!</title>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f0f9ff; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .card { background: white; border-radius: 16px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1); overflow: hidden; }
              .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 40px 20px; text-align: center; position: relative; }
              .header::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>') repeat; animation: float 20s infinite linear; }
              .content { padding: 40px 30px; }
              .highlight-box { background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border: 2px solid #0ea5e9; border-radius: 12px; padding: 20px; margin: 25px 0; text-align: center; }
              .feature { display: flex; align-items: center; margin: 15px 0; padding: 15px; background: #f8fafc; border-radius: 8px; }
              .feature-icon { width: 40px; height: 40px; background: #3b82f6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 18px; }
              .cta-button { display: inline-block; background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 20px 0; transition: transform 0.3s ease; }
              .footer { background: #1f2937; color: white; padding: 30px 20px; text-align: center; }
              .social-links { margin: 20px 0; }
              .social-links a { display: inline-block; margin: 0 10px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 50%; color: white; text-decoration: none; }
              @keyframes float { 0% { transform: translateX(-50px); } 100% { transform: translateX(50px); } }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="card">
                <div class="header">
                  <h1 style="margin: 0; font-size: 28px; position: relative; z-index: 1;">🎉 Thank You, ${name}!</h1>
                  <p style="margin: 15px 0 0 0; font-size: 16px; opacity: 0.95; position: relative; z-index: 1;">Your message has been received successfully</p>
                </div>
                
                <div class="content">
                  <div class="highlight-box">
                    <h2 style="margin: 0 0 10px 0; color: #0ea5e9; font-size: 20px;">🚀 What Happens Next?</h2>
                    <p style="margin: 0; color: #475569; font-size: 14px;">Our financial experts will review your inquiry and contact you within <strong>24 hours</strong> to schedule your free consultation.</p>
                  </div>

                  <div class="feature">
                    <div class="feature-icon">📞</div>
                    <div>
                      <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 16px;">Personal Consultation</h3>
                      <p style="margin: 0; color: #6b7280; font-size: 14px;">We'll call you at ${phone} to discuss your financial goals</p>
                    </div>
                  </div>

                  <div class="feature">
                    <div class="feature-icon">💡</div>
                    <div>
                      <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 16px;">Customized Strategy</h3>
                      <p style="margin: 0; color: #6b7280; font-size: 14px;">Tailored financial planning based on your specific needs</p>
                    </div>
                  </div>

                  <div class="feature">
                    <div class="feature-icon">🎯</div>
                    <div>
                      <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 16px;">Expert Guidance</h3>
                      <p style="margin: 0; color: #6b7280; font-size: 14px;">Professional advice from certified financial planners</p>
                    </div>
                  </div>

                  ${
                    subject
                      ? `
                  <div style="background: #fef7cd; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 0 8px 8px 0; margin: 25px 0;">
                    <p style="margin: 0; color: #92400e;"><strong>Your Interest:</strong> ${subject}</p>
                  </div>
                  `
                      : ""
                  }

                  <div style="text-align: center; margin: 30px 0;">
                    <a href="tel:+91-9876543210" class="cta-button" style="color: white;">📞 Call Us Now: +91-9876543210</a>
                  </div>

                  <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 25px 0;">
                    <h3 style="margin: 0 0 10px 0; color: #334155;">Need Immediate Assistance?</h3>
                    <p style="margin: 0; color: #64748b; font-size: 14px;">For urgent financial matters, feel free to call us directly. Our experts are available Monday to Saturday, 9:00 AM to 7:00 PM IST.</p>
                  </div>
                </div>

                <div class="footer">
                  <h3 style="margin: 0 0 15px 0;">Stay Connected</h3>
                  <div class="social-links">
                    <a href="#" title="LinkedIn">💼</a>
                    <a href="#" title="WhatsApp">📱</a>
                    <a href="#" title="Email">📧</a>
                    <a href="#" title="Website">🌐</a>
                  </div>
                  <p style="margin: 10px 0 0 0; font-size: 12px; opacity: 0.8;">
                    This email was sent to ${email} because you contacted us through our website.
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
