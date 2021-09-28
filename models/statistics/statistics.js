const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');

const Statistics = sequelize.define('Statistics', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    statistics: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: {
            args: true,
            msg: { code: 40146, msg: 'Estadistica ya existe' },
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: { code: 40146, msg: 'Nombre de estadistica ya existe' },
        }
    },
}, { timestamps: false });


module.exports = Statistics;