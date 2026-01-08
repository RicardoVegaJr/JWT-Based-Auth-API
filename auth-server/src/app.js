import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many auth attempts. Try again later.'
});

app.use('/auth', authLimiter);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Auth API running' });
});

export default app;