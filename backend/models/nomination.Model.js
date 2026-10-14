import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


export const Nomination = sequelize.define('Nomination', {
    categoryId: {
        allowNull: false,
        type: DataTypes.CHAR,
    },
    ceremonyId: {
        allowNull: false,
        type: DataTypes.CHAR
    },
    winner: {
        allowNull: false,
        type: DataTypes.BOOLEAN
    }
});