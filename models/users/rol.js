//Importamos el ORM sequelize que nos permite interactuar mas facilmente con la base de datos
const Sequelize = require('sequelize');

//Importamos los DataTypes, estos nos serviran para especificar el tipo de dato que se debe ingresar
//en una columna del modelo
const DataTypes = Sequelize.DataTypes;

//Importamos el modulo sequelize que se encuentra en el archivo initService
const { sequelize } = require('../../services/initService');

//Creamos un modelo que servira para los roles de usuario, aqui especificamos cuales son las columnas
//que contiene esta tabla, indicando que tiene un id de tipo integer y un nombre de tipo string
const Rol = sequelize.define('rols', {
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
            msg: { code: 40146, msg: 'Nombre de rol ya existe' },
        }
    },
}, { timestamps: false });


//Exportamos el modelo rol
module.exports = Rol;