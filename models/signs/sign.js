const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Category = require('../lessons/category');

//Esquema de datos para las sign
const Sign = sequelize.define('signs', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    sign: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
}, { timestamps: false });

//Relacion con el esquema de categoria
Sign.belongsTo(Category, { as: 'category',foreignKey: 'category_id' });

module.exports = Sign;