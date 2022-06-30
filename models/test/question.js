const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Sign = require('../signs/sign');

const Question = sequelize.define('questions', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    statement: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sign_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, { timestamps: false });

Question.belongsTo(Sign, { as: 'sign',foreignKey: 'sign_id' });

module.exports = Question;