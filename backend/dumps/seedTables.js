import { Category } from "../models/category.Model.js"
import { Ceremony } from "../models/ceremony.Model.js"
import { Film } from "../models/film.Model.js"
import { Nomination } from "../models/nomination.Model.js"
import { Nominee } from "../models/nominee.Model.js"
import { nodefs } from "../server.js"


export const seedTables = async () => {

    const categoriesToInsert = []
    const ceremoniesToInsert = []
    const nomineesNomination = []
    const filmsNomination = []
    const films = []
    const nominees = []


    const data = await nodefs.readFile('./dumps/dump_nominations.json', 'utf-8')
    const dataArray = JSON.parse(data)

    for (const nomination of dataArray){

        !categoriesToInsert.includes(nomination.category) ? categoriesToInsert.push(nomination.category) : null
        !ceremoniesToInsert.includes(String(nomination.year)) ? ceremoniesToInsert.push(String(nomination.year)) : null

        for(const filmNomination of nomination.filmes){
            !films.some(film => film.id == filmNomination.id) ? films.push(filmNomination) : null
        }
        for(const nomineesNomination of nomination.indicados){
            !nominees.some(nominee => nominee.id == nomineesNomination.id) ? nominees.push(nomineesNomination) : null
        }
    }

    console.log(films)
    console.log(nominees)

    const bdFilms = await Film.bulkCreate(films.map(film => {
        return {imdbId: film.id, title: film.nome}
    }), {returning: true})
    const bdNominees = await Nominee.bulkCreate(nominees.map(nominee => {
        return {imdbId: nominee.id, name: nominee.nome}
    }), {returning: true})

    // console.log(bdFilms)

    //console.log(ceremoniesToInsert)


    await Category.bulkCreate(categoriesToInsert.map((category) => ({name: category})))
    await Ceremony.bulkCreate(ceremoniesToInsert.map((ceremony) => ({year: ceremony})))

    const categories = await Category.findAll({raw: true})
    const ceremonies = await Ceremony.findAll({raw: true})

    //console.log(ceremonies)

    const nominationsToInsert = dataArray.map((nomination, index) => {

        films.push({filmes: nomination.filmes, nominationId: index + 1})
        nominees.push({indicados: nomination.filmes, nominationId: index + 1})
        return {
            categoryId: categories.find(categoria => categoria.name === nomination.category)?.id,
            ceremonyId: ceremonies.find(ceremony => ceremony.year === String(nomination.year))?.id,
            winner: Boolean(nomination.winner)
        }
    })    

    


    await Nomination.bulkCreate(nominationsToInsert)
    
    //console.log('tabelas preenchidas')
}