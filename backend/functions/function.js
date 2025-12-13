// import { sendContactEmail } from './mailer';

// export async function handler(event, context) {
//   try {
//     const formData = JSON.parse(event.body);

//     await sendContactEmail(formData);

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Email sent successfully' }),
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({
//         message: 'Failed to send email',
//         error: error.message,
//       }),
//     };
//   }
// }
