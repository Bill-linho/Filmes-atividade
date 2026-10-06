import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { nodefs } from "../server.js";


export const Film = sequelize.define('Film', {
  imdbId: { type: DataTypes.STRING, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
});


export const bulkFilm = async () => {
  const data = await nodefs.readFile('./dumps/dump_films.json', 'utf-8')

  const filmes = JSON.parse(data)

  const objsParaInserir = []

  for(const filme of filmes){
    objsParaInserir.push({imdbId: filme.id, title: filme.nome})
  }

  console.log(objsParaInserir)

  await Film.bulkCreate(objsParaInserir)
} 