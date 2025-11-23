// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import contactRoutes from './routes/contact.js'; // import router

// dotenv.config();

// const app = express();

// // CORS
// app.use(
//   cors({
//     origin: process.env.FRONTEND_ORIGIN,
//     methods: ['POST'],
//   })
// );

// // Parse JSON body
// app.use(express.json());

// // Mount routes
// app.use('/api', contactRoutes); // all routes inside contact.js will be under /api

// // Test route
// app.get('/', (req, res) => {
//   res.send('Backend running');
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [/^http:\/\/localhost:\d+$/],
    methods: ['GET', 'POST'],
  })
);

app.use(express.json());

app.use('/api', contactRoutes);

app.get('/', (req, res) => {
  res.send('Backend running');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
