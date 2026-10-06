import { Category } from "./category.Model.js";
import { Ceremony } from "./ceremony.Model.js";
import { Film } from "./film.Model.js";
import { Nomination } from "./nomination.Model.js";
import { Nominee } from "./nominee.Model.js";


Ceremony.hasMany(Nomination, { foreignKey: 'ceremonyId' });
Nomination.belongsTo(Ceremony, { foreignKey: 'ceremonyId' });

Category.hasMany(Nomination, { foreignKey: 'categoryId' });
Nomination.belongsTo(Category, { foreignKey: 'categoryId' });


Nomination.belongsToMany(Film, { through: 'NominationFilms', foreignKey: 'nominationId' });
Film.belongsToMany(Nomination, { through: 'NominationFilms', foreignKey: 'filmId' });

Nomination.belongsToMany(Nominee, { through: 'NominationNominee', foreignKey: 'nominationId' });
Nominee.belongsToMany(Nomination, { through: 'NominationNominee', foreignKey: 'personId' });