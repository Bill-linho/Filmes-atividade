import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,                
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    error: 'Muitas requisições, tente novamente em breve.'
  }
});

export default limiter;