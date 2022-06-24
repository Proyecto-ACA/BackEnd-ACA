//Importamos todos los archivos necesarios para la creacion del modelo
//lessonsxsign
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Lesson = require('./lesson');
const Sign = require('../signs/sign');

//Cremos el objeto que nos servira para hacel el modelo LessonXSign, este modelo
//servira para crear la tabla de nivel intermedio que se debe crear debido a que
//la relacion entre lecciones y signos es de varios a varios, los atributos que
//lleva este objeto son: el id principal de la tabla, el id de la leccion, el id
//del signo y el tipo
const LessonXSign = sequelize.define('lesson_x_sign', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    lesson_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    sign_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    type: {
        type: Sequelize.INTEGER, 
        allowNull: false,
    },
}, { timestamps: false });

//Estas lineas nos sirven para crear las relaciones entre las tablas de leccion y
//signo, con la tabla lessonxsign
LessonXSign.belongsTo(Lesson, { as: 'lesson',foreignKey: 'lesson_id' });
LessonXSign.belongsTo(Sign, { as: 'sign',foreignKey: 'sign_id' });

module.exports = LessonXSign;