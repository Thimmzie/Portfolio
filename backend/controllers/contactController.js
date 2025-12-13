// import nodemailer from 'nodemailer';

// export const handleContact = async (req, res) => {
//   console.log('Received contact form submission:', req.body);

//   const { name, email, projectType, message } = req.body;

//   try {
//     console.log('Setting up transporter...');
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: process.env.SMTP_SECURE === 'true',
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     console.log('Sending email...');
//     const mailOptions = {
//       from: process.env.SMTP_FROM,
//       to: process.env.CONTACT_TO,
//       subject: `New Contact Form Message from ${name}`,
//       text: `
// Name: ${name}
// Email: ${email}
// Project Type: ${projectType || 'Not specified'}

// Message:
// ${message}
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');

//     return res.status(200).json({
//       success: true,
//       message: 'Message sent successfully.',
//     });
//   } catch (err) {
//     console.error('Email error:', err);
//     return res.status(500).json({
//       success: false,
//       error: 'Failed to send message.',
//     });
//   }
// };
