const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Category = require('./singCategory');

const Sign = sequelize.define('signs', {
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
    sign_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    sign: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { timestamps: false });

Sign.belongsTo(Category, { as: 'category',foreignKey: 'sign_category_id' });

module.exports = Sign;