import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { nodefs } from "../server.js";


export const Ceremony = sequelize.define('Ceremony', {
  year: { type: DataTypes.STRING(10), allowNull: false },
});


export const bulkCeremony = async () => {
  const data = await nodefs.readFile('./dumps/dump_years.json', 'utf-8')

  const anos = JSON.parse(data)

  const objsParaInserir = []

  for(const ano of anos){
    objsParaInserir.push({year: ano})
  }

  await Ceremony.bulkCreate(objsParaInserir)
} 