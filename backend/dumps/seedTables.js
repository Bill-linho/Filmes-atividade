import { Category } from "../models/category.Model.js"
import { Ceremony } from "../models/ceremony.Model.js"
import { nodefs } from "../server.js"


export const seedTables = async () => {

    const categoriesToInsert = []
    const ceremoniesToInsert = []

    const data = await nodefs.readFile('./dumps/dump_nominations.json', 'utf-8')
    const dataArray = JSON.parse(data)

    for (const nomination of dataArray){

        !categoriesToInsert.includes(nomination.category) ? categoriesToInsert.push(nomination.category) : null
        !ceremoniesToInsert.includes(String(nomination.year)) ? ceremoniesToInsert.push(String(nomination.year)) : null
    }

    console.log(ceremoniesToInsert)


    await Category.bulkCreate(categoriesToInsert.map((category) => ({name: category})))
    await Ceremony.bulkCreate(ceremoniesToInsert.map((ceremony) => ({year: ceremony})))

    const categories = await Category.findAll({raw: true})
    const ceremonies = await Ceremony.findAll({raw: true})

    console.log(ceremonies)

    const nominationsToInsert = dataArray.map((nomination, index) => {
        return {
            categoryId: categories.find(categoria => categoria.name === nomination.category)?.id,
            ceremonyId: ceremonies.find(ceremony => ceremony.year === String(nomination.year))?.id,
            winner: Boolean(nomination.winner)
        }
    })    

    console.log(nominationsToInsert)
}