import { validationResult } from 'express-validator';
import sanitizeHtml from 'sanitize-html';

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Sanitize input to prevent XSS
  req.body.name = sanitizeHtml(req.body.name);
  req.body.email = sanitizeHtml(req.body.email);
  req.body.message = sanitizeHtml(req.body.message);
  req.body.projectType = sanitizeHtml(req.body.projectType || '');

  next();
};
