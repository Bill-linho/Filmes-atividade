import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


export const Ceremony = sequelize.define('Ceremony', {
  year: { type: DataTypes.STRING(10), allowNull: false },
});