import express from 'express';
import 'dotenv/config';

import searchRouter from './routes/search.Routes.js';

const server = express();

const PORT = process.env.PORT;

server.use('/search', searchRouter);

server.listen(PORT, () => {
    console.log(`Backend aberto em port ${PORT}`)
});