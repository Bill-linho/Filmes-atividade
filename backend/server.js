import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import corsOptions from './config/cors.config.js';
import rateLimiter from './config/ratelimit.config.js';
import { searchController } from './controllers/search.Controller.js';

if (searchController && !searchController.searchParams) {
  searchController.searchParams = searchController.search;
}

const { default: searchRouter } = await import('./routes/search.Routes.js');

dotenv.config();

const app = express();

app.set('trust proxy', 1);

app.use(express.json());
app.use(cors(corsOptions));
app.use(rateLimiter);

app.use('/search', searchRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});