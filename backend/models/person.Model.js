import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";



export const Person = sequelize.define('Person', {
  imdbId: { type: DataTypes.STRING(20), primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
});