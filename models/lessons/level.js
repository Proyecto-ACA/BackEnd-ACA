const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');

const LessonLevel = sequelize.define('lesson_levels', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    level: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: {
            args: true,
            msg: { code: 40146, msg: 'Nivel de leccion ya existe' },
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: { code: 40146, msg: 'Nombre de nivel de leccion ya existe' },
        }
    },
}, { timestamps: false });


module.exports = LessonLevel;