import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";



export const Nominee = sequelize.define('Nominee', {
  imdbId: { type: DataTypes.STRING(20), primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
});