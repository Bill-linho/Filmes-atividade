import express from "express";
import "dotenv/config";

import sequelize from "./config/database.js";
import { bulkCategories } from "./models/category.Model.js";

const server = express();

const PORT = process.env.PORT;

await bulkCategories()


sequelize.sync({ alter: true, force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Backend aberto em port ${PORT}`);
  });
});
