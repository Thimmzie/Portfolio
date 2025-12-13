// import express from 'express';
// import { body } from 'express-validator';
// import { handleContact } from '../controllers/contactController.js';
// import { validateRequest } from '../validators/contactValidator.js';

// const router = express.Router();

// router.post(
//   '/contact',
//   [
//     body('name')
//       .trim()
//       .notEmpty()
//       .withMessage('Name is required')
//       .isLength({ max: 100 }),
//     body('email').trim().isEmail().withMessage('Valid email is required'),
//     body('message')
//       .trim()
//       .notEmpty()
//       .withMessage('Message is required')
//       .isLength({ max: 2000 }),
//     body('honeypot').optional().isEmpty().withMessage('Bot detected'),
//   ],
//   validateRequest,
//   handleContact
// );

// export default router;
