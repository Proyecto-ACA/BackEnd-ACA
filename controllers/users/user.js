//Importamos el modelo de usuarios que se encuentra en la carpeta models
const User = require('../../models/users/user');

//Esta funcion nos servira para convertir los resultados de la peticion a la base en un archivo JSON
//Que retorne el id del usuario, el nombre del usuario y el id del rol asociado a ese usuario
const transform = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
            rol_id:record.rol_id
        }
    });
}

//Creamos esta funcion que nos servira para realizar peticiones get
//a la base de datos y traer todos los usuarios
const getAll = (req, res) => {
    console.log('users getAll: ', req.body);
    try {
        User.findAll()
        .then((result)=>{
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('users: ', err.message);
        return res.status(500).send(err);
    }
};

//Creamos esta funcion que sirve para realizar peticiones GET
//a la base de datos y traer un usuario en especifico
const getOne = (req, res) => {
    const id = req.params.id;
    console.log('Users getOne: ', id);
    try {
        User.findByPk(id)
        .then((result)=>{
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('signs: ', err.message);
        return res.status(500).send(err);
    }
};

//Creamos esta funcion que sirve para realizar peticiones POST
//a la base de datos, buscando un usuario en especifico por
//medio del nombre
const findUser = (item, res) => {
    console.log('User save: ', item);
    try {
        User.findOne({
            where: {
                name: item.name
            }
        })
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('User save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Creamos esta funcion que sirve para realizar peticiones GET
//a la base de datos, buscando un usuario en especifico por
//medio del id
const findId = (item, res) => {
    console.log('User save: ', item);
    try {
        User.findOne({
            where: {
                id: item.id
            }
        })
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('User save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Creamos esta funcion que sirve para realizar peticiones POST
//a la base de datos, para insertar un nuevo usuario
const save = (item, res) => {
    console.log('User save: ', item);
    try {
        User.create(item)
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('User save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Creamos esta funcion que sirve para realizar una peticion PUT
//a la base de datos, para poder actualizar informacion de los
//usuarios
const update = (item, res) => {
    console.log('User update: ', item);
    try {
        User.update(item, { where: { id: item.id}})
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('User update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Creamos esta funcion que sirve para crear una peticion DELETE
//a la base de datos, para poder borrar un usuario en especifico
//por medio del id
const deleteItem = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id:`${id}`} : null;
    console.log('usuario delete: ', req.id);
    try {
        User.destroy({ where:condition})
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('sign delete: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Exportamos todas las funciones anteriores
module.exports = {
    getAll: getAll,
    save: save,
    getOne:getOne,
    findUser: findUser,
    findId: findId,
    update: update,
    deleteItem: deleteItem,
};
