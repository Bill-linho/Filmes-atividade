import express from "express";
import "dotenv/config";
import * as fs from 'fs/promises'

export const nodefs = fs

import sequelize from "./config/database.js";
import { seedTables } from "./dumps/seedTables.js";
import searchRouter from "./routes/search.Route.js";



const server = express();

server.use(searchRouter);
server.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: "Erro ao buscar as indicações." });
});

const PORT = process.env.PORT;



sequelize.sync({ alter: true, force: true }).then(async () => {

  seedTables()

  server.listen(PORT, () => {
    console.log(`Backend aberto em port ${PORT}`);
  });
});
