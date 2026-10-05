import { Op } from 'sequelize';
import SearchItem from '../models/search.Model.js';

export const searchController = {
    search: async (req, res) => {
        try {
            const category = req.params.category || req.query.category;
            const year = req.params.year || req.query.year;

            const whereClause = {};

            if (year) {
                whereClause.year = { [Op.iLike]: `%${year}%` };
            }

            if (category) {
                whereClause.canonicalCategory = { [Op.iLike]: `%${category}%` };
            }

            const results = await SearchItem.findAll({
                where: whereClause
            });

            if (results.length === 0) {
                return res.status(404).json({ message: 'Nenhum item encontrado de acordo com os critérios' });
            }

            return res.json(results);
        } catch (error) {
            console.error('Search error:', error);
            return res.status(500).json({ error: 'Erro interno de servidor' });
        }
    }
};