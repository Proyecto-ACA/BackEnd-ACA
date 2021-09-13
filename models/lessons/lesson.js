const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Category = require('./category');
const Level = require('./level');
const Sign = require('../signs/sign');

const Lesson = sequelize.define('lessons', {
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
    level_id: {
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

Lesson.belongsTo(Level, { as: 'level',foreignKey: 'level_id' });
Lesson.belongsTo(Category, { as: 'category',foreignKey: 'category_id' });
Lesson.belongsTo(Word, { as: 'sign',foreignKey: 'sign_id' });

module.exports = Lesson;