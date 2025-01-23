import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { fullName, companyName, email, phone, message } = req.body;

        // Debug log
        console.log('Received form data:', { fullName, companyName, email, phone, message });

        // Create transporter with error handling
        const transporter = nodemailer.createTransport({
            host: 'mail.kurumsaleposta.com',
            port: 587, // 465 yerine 587 kullanıyoruz
            secure: false, // TLS için false yapıyoruz
            auth: {
                user: 'no-reply@schoolroute.net',
                pass: 'No.Replyschool12',
            },
            tls: {
                rejectUnauthorized: false,
                minVersion: 'TLSv1.2', // Minimum TLS versiyonunu belirtiyoruz
            },
            debug: true,
        });

        // Send email
        try {
            const info = await transporter.sendMail({
                from: '"School Route" <no-reply@schoolroute.net>',
                to: 'no-reply@schoolroute.net',
                subject: 'İletişim Formu Mesajı',
                html: `
                    <h2>İletişim Formu Mesajı</h2>
                    <p><strong>Ad Soyad:</strong> ${fullName}</p>
                    <p><strong>Kurum Adı:</strong> ${companyName}</p>
                    <p><strong>E-posta:</strong> ${email}</p>
                    <p><strong>Telefon:</strong> ${phone}</p>
                    <p><strong>Mesaj:</strong> ${message}</p>
                `,
            });

            console.log('Message sent: %s', info.messageId);
            return res.status(200).json({ message: 'Email sent successfully' });
        } catch (sendError) {
            console.error('Send Mail Error:', sendError);
            return res.status(500).json({
                message: 'Failed to send email',
                error: sendError instanceof Error ? sendError.message : 'Unknown error'
            });
        }
    } catch (error) {
        console.error('General Error:', error);
        return res.status(500).json({
            message: 'Server error',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
} 