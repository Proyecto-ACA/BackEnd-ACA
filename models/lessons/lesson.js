const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');

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
}, { timestamps: false });


module.exports = Lesson;