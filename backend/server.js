import express from "express";
import "dotenv/config";
import * as fs from 'fs/promises'

export const nodefs = fs

import sequelize from "./config/database.js";
import { seedTables } from "./dumps/seedTables.js";



const server = express();

const PORT = process.env.PORT;



sequelize.sync({ alter: true, force: true }).then(async () => {

  seedTables()

  server.listen(PORT, () => {
    console.log(`Backend aberto em port ${PORT}`);
  });
});
