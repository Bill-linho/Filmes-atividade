import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


export const Nomination = sequelize.define('Nomination', {
  winner: { type: DataTypes.BOOLEAN, defaultValue: false },
  detail: { type: DataTypes.TEXT, allowNull: true },
  note: { type: DataTypes.TEXT, allowNull: true },
  citation: { type: DataTypes.TEXT, allowNull: true },
});