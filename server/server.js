// index.js
import express from 'express'
import cors from 'cors';
import { connectDB } from './config/db.js';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// API endpoints
app.use('/api/user', userRouter);

// Default endpoint
app.get('/', (req, res) => {
    res.send('API Working');
});

// Start server
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
