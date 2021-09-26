const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');

const Difficulty = sequelize.define('test_difficulty', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    difficulty: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: {
            args: true,
            msg: { code: 40146, msg: 'Dificultad de evaluacion ya existe' },
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: { code: 40146, msg: 'Nombre de Dificultad de evaluacion ya existe' },
        }
    },
}, { timestamps: false });


module.exports = Difficulty;