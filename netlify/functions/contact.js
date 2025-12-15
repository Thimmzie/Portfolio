const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    const { name, email, projectType, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_TO,
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Project Type: ${projectType || 'Not specified'}

Message:
${message}
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Message sent successfully.',
      }),
    };
  } catch (error) {
    console.error('Email error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send message.',
      }),
    };
  }
};
