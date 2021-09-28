const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Category = require('./category');


const Statisticsxcategory = sequelize.define('Statisticsxcategory', {
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
    statistics_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, { timestamps: false });

Statisticsxcategory.belongsTo(Category, { as: 'category',foreignKey: 'category_id' });
Statisticsxcategory.belongsTo(Statistics, { as: 'statistics',foreignKey: 'statistics_id' });

module.exports = Statisticsxcategory;