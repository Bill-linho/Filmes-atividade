import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { nodefs } from "../server.js";


export const Category = sequelize.define('Category', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
});