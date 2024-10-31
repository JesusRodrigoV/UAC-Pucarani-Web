const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Book = sequelize.define('Book', {
    id_matbib: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    type_matbib: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    title_matbib: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author_matbib: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description_matbib: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
  timestamps: false,
  tableName: 'MATERIAL_BIBLIOGRAFICO',
});

module.exports = Book;
