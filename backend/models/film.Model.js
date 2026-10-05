import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


export const Film = sequelize.define('Film', {
  imdbId: { type: DataTypes.STRING, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
});
