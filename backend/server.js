import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import connectMongoDB from './db/connectMongoDb.js';

dotenv.config();

const app = express();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(8000, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectMongoDB();
});
