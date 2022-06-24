//Importamos todos los archivos necesarios para crear el
//modelo de categoria de leccion
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');

//Comenzamos creando el objeto LessonCategory por medio de
//sequelize, el objeto tendra las siguientes propiedades:
//ID de la categoria, nombre, imagen que representara la
//categoria
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
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { timestamps: false });


//Exportamos el modelo de categoria
module.exports = LessonCategory;