const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Rol = require('../users/rol');

const User = sequelize.define('users', {
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
    rol_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    }
}, { timestamps: false });

User.belongsTo(Rol, { as: 'rol',foreignKey: 'rol_id' });
module.exports = User;