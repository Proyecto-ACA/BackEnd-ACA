const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Difficulty = require('./difficulty');
const Category= require('./category');
const Sign = require('../signs/sign');

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
    sign_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, { timestamps: false });

Lesson.belongsTo(Difficulty, { as: 'level',foreignKey: 'level_id' });
Lesson.belongsTo(Category, { as: 'category',foreignKey: 'category_id' });
Lesson.belongsTo(Sign, { as: 'sign',foreignKey: 'sign_id' });

module.exports = Lesson;