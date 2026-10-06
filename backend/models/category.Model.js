import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { nodefs } from "../server.js";


export const Category = sequelize.define('Category', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

export const bulkCategory = async () => {
  const data = await nodefs.readFile('./dumps/dump_category.json', 'utf-8')

  const categorias = JSON.parse(data)

  const objsParaInserir = []

  for(const categoria of categorias){
    objsParaInserir.push({name: categoria})
  }

  await Category.bulkCreate(objsParaInserir)
} 