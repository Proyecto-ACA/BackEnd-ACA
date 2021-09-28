const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Test = require('./test');

const Statisticsxtest = sequelize.define('Statisticsxtest', {
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
    test_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    statistics_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, { timestamps: false });

Statisticsxtest.belongsTo(Test, { as: 'test',foreignKey: 'test_id' });
Statisticsxtest.belongsTo(Statistics, { as: 'statistics',foreignKey: 'statistics_id' });

module.exports = Statisticsxtest;