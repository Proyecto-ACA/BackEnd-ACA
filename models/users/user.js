//Importamos el ORM sequelize que nos permite interactuar mas facilmente con la base de datos
const Sequelize = require('sequelize');

//Importamos los DataTypes, estos nos serviran para especificar el tipo de dato que se debe ingresar
//en una columna del modelo
const DataTypes = Sequelize.DataTypes;

//Importamos el modulo sequelize que se encuentra en el archivo initService
const { sequelize } = require('../../services/initService');

//Importamos el modelo de rol que creamos antes
const Rol = require('../users/rol');

//Creamos un modelo que servira para los usuarios, aqui especificamos cuales son las columnas
//que contiene esta tabla, indicando que tiene un id de tipo integer, un nombre de tipo string
//un rol de tipo integer y una password de tipo string
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

//Se define una relacion entre el modelo de rol y el de usuario, en este caso
//es una relacion uno a uno donde usuario le pertenece a rol
User.belongsTo(Rol, { as: 'rol',foreignKey: 'rol_id' });

//Se exporta el modulo de usuarios
module.exports = User;