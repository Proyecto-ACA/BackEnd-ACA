const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');

const LessonCategory = sequelize.define('categorys', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: { code: 40146, msg: 'Nombre de categoria de leccion ya existe' },
        }
    },
}, { timestamps: false });


module.exports = LessonCategory;