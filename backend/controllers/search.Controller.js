export const searchController = {
    search: async (req, res) => {
        try {
            const defaults = {
                year: '2016',
                category: 'best-picture'
            };

            const { year = defaults.year, category = defaults.category } = req.query;

            const queryOptions = {
                where: {
                    year: year
                }
            };

            if (category !== defaults.category) {
                queryOptions.where.category = category;
            }

            const results = await Item.findAll(queryOptions);

            if (results.length === 0) {
                return res.status(404).json({ message: 'Nenhum item encontrado de acordo com os critérios' });
            }

            res.json(results);
        } catch (error) {
            console.error('Search error:', error);
            res.status(500).json({ error: 'Erro interno de servidor' });
        }
    }
};
