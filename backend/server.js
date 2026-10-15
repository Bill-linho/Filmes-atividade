import express from 'express';
import cors from 'cors';
import "dotenv/config";
import corsOptions from './config/cors.config.js';
import rateLimiter from './config/ratelimit.config.js';
import * as fs from 'fs/promises';
import sequelize from "./config/database.js";
import { seedTables } from "./dumps/seedTables.js";
import searchRouter from "./routes/search.Routes.js";

export const nodefs = fs

const server = express();
server.use(express.json());
server.use(cors(corsOptions));
server.use(rateLimiter);

server.use(searchRouter);
server.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: "Erro ao buscar as indicações." });
});

server.set('trust proxy', 1);

const PORT = process.env.PORT;

sequelize.sync({ alter: true, force: true }).then(async () => {

  seedTables()

  server.listen(PORT, () => {
    console.log(`Backend aberto em port ${PORT}`);
  });
});
