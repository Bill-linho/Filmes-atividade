import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { nodefs } from "../server.js";


export const Ceremony = sequelize.define('Ceremony', {
  year: { type: DataTypes.STRING(10), allowNull: false },
});

