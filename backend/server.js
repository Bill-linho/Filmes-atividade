import express from "express";
import "dotenv/config";
import * as fs from 'fs/promises'

export const nodefs = fs

import sequelize from "./config/database.js";
import { bulkCategory } from "./models/category.Model.js";
import { bulkCeremony } from "./models/ceremony.Model.js";
import { bulkFilm } from "./models/film.Model.js";



const server = express();

const PORT = process.env.PORT;



sequelize.sync({ alter: true, force: true }).then(async () => {

  await bulkCategory()
  await bulkCeremony()
  await bulkFilm()
  server.listen(PORT, () => {
    console.log(`Backend aberto em port ${PORT}`);
  });
});
