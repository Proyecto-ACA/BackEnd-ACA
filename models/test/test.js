const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Difficulty = require('./difficulty');
const Category = require('./category');

const Test = sequelize.define('tests', {
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
    difficulty_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, { timestamps: false });

Test.belongsTo(Difficulty, { as: 'difficulty',foreignKey: 'difficulty_id' });
Test.belongsTo(Category, { as: 'category',foreignKey: 'category_id' });

module.exports = Test;