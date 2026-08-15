import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from './config/db.js';
import courseRouter from './routes/courseRouter.js';
import bookingRouter from './routes/bookingRouter.js';
import dotenv from "dotenv";

dotenv.config();


const app = express();
const port = process.env.PORT || 4000;
// middleware
console.log("FRONTEND_URL =", process.env.FRONTEND_URL);
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(clerkMiddleware());

app.use('/uploads', express.static('uploads'));


//db
connectDB();

// routes
app.use('/api/course', courseRouter);
app.use('/api/booking', bookingRouter);

// App port and listen
app.get('/', (req, res) => {
    res.send('API WORKING');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
