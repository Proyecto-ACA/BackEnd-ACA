//Importamos todos los archivos que son necesarios para crear el modelo
//de leccion
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Category = require('./category');
const Level = require('./level');
const Sign = require('../signs/sign');

//Creamos el objeto que nos servira como modelo de las lecciones, para poder crear
//su tabla correspondiente en la base de datos utilizando sequelize, los atributos
//que contiene este objeto son: ID de la leccion, nombre de la leccion, una imagen
//que represente la leccion, una descripcion de la leccion, el ID del nivel de la leccion
//y el id de la categoria de la leccion
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
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    level_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, { timestamps: false });

//A traves de estas lineas creamos las relaciones de llave foranea
//entre la tabla de lecciones y las tablas de nivel y categoria
Lesson.belongsTo(Level, { as: 'level',foreignKey: 'level_id' });
Lesson.belongsTo(Category, { as: 'category',foreignKey: 'category_id' });

module.exports = Lesson;