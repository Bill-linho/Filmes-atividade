import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SearchItem = sequelize.define('SearchItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ceremony: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'ceremony'
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'year'
    },
    canonicalCategory: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'canonical_category'
    },
    film: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'film'
    },
    filmId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'film_id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'name'
    },
    nominees: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'nominees'
    },
    nomineeIds: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'nominee_ids'
    },
    winner: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'winner'
    },
    detail: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'detail'
    },
    note: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'note'
    },
    citation: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'citation'
    }
}, {
    tableName: 'awards_search',
    timestamps: false
});

export default SearchItem;