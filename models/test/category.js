const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');

// opcion multiple, falso verdadero

const TestCategory = sequelize.define('test_categorys', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    category: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: {
            args: true,
            msg: { code: 40146, msg: 'Categoria de evaluacion ya existe' },
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: { code: 40146, msg: 'Nombre de categoria de evaluacion ya existe' },
        }
    },
}, { timestamps: false });


module.exports = TestCategory;