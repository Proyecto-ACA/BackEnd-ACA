//Importamos los archivos necesarios para la creacion del modelo
//de los niveles de las lecciones

const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');

//Creamos el objeto que definira como se creara la tabla de lecciones
//en la base de datos postgres, el objeto tiene los siguientes atributos:
//ID del nivel, numero del nivel, nombre del nivel
const LessonLevel = sequelize.define('lesson_levels', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    level: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: {
            args: true,
            msg: { code: 40146, msg: 'Nivel de leccion ya existe' },
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: { code: 40146, msg: 'Nombre de nivel de leccion ya existe' },
        }
    },
}, { timestamps: false });


//Exportamos el objeto de LessonLevel
module.exports = LessonLevel;