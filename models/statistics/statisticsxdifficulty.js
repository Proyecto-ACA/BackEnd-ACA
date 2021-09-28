const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Difficulty = require('./test');

const Statisticsxdifficulty = sequelize.define('Statisticsxdifficulty', {
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

Statisticsxdifficulty.belongsTo(Difficulty, { as: 'difficulty',foreignKey: 'difficulty_id' });
Statisticsxdifficulty.belongsTo(Statistics, { as: 'statistics',foreignKey: 'statistics_id' });

module.exports = Statisticsxdifficulty;