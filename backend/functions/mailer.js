// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: process.env.SMTP_SECURE === 'true',
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// export const sendContactEmail = async (formData) => {
//   const mailOptions = {
//     from: process.env.SMTP_FROM,
//     to: process.env.CONTACT_TO,
//     subject: `New Contact Request: ${formData.projectType || 'New Project'}`,
//     text: `
// Name: ${formData.name}
// Email: ${formData.email}
// Project Type: ${formData.projectType}
// Message: ${formData.message}
//     `,
//   };

//   await transporter.sendMail(mailOptions);
// };
