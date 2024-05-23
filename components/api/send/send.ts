// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const fromEmail = process.env.FROM_EMAIL;

  if (!fromEmail) {
    return res.status(500).json({ error: 'Sender email address is not configured.' });
  }

  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: subject,
        text: message, // Assuming plain text email, adjust if needed
      });

      if (error) {
        return res.status(400).json(error);
      }

      res.status(200).json(data);
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
