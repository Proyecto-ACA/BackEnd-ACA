const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Lesson = require('./lesson');
const Sign = require('../signs/sign');

const LessonXSign = sequelize.define('lessons_x_signs', {
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
}, { timestamps: false });

LessonXSign.belongsTo(Lesson, { as: 'lesson',foreignKey: 'lesson_id' });
LessonXSign.belongsTo(Sign, { as: 'sign',foreignKey: 'sign_id' });

module.exports = LessonXSign;

//****palabra */
//descripcion
//imagen representativar
//gif
//nombre
//categoriaID: animales, saludos,etc

//****categoria
//nombre
//imagen representativa

//**** leccion
//descripcion de la leccion
//imagen descriptivada
//categoriaID: animales, saludos,etc
//nivelID: muyfacil, facil, normal , dificil, muy dificil
//palabras... unas 3 -> tabla cruz


//***test */
//nombre
//dificultadID facil, mwdio, difici
//preguntas
//------categoria, opciones aleatorias


//pregunta
//categoriaId: opcion multiple...etc 
//enunciado
//palabras, nombre, categoria



