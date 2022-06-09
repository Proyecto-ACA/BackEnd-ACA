//Importamos el modelo de rol que se encuentra en la carpeta models
const Rol = require('../../models/users/rol');

//Esta funcion nos servira para convertir los resultados de la peticion a la base en un archivo JSON
//Que retorne el id y el nombre de los roles 
const transform = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
        }
    });
}

//Creamos esta funcion que nos servira para realizar peticiones GET
//a la base de datos, trayendo todos los roles
const getAll = (req, res) => {
    console.log('rols getAll: ', req.body);
    try {
        Rol.findAll()
        .then((result)=>{
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('rols: ', err.message);
        return res.status(500).send(err);
    }
};

//Creamos esta funcion que sirve para realizar peticiones POST
//a la base de datos, para insertar un nuevo rol
const save = (item, res) => {
    console.log('Rol save: ', item);
    try {
        Rol.create(item)
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
        console.log('Rol save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Creamos esta funcion que sirve para realizar peticiones PUT
//a la base de datos, para poder actualizar la informacion de
//un rol
const update = (item, res) => {
    console.log('Rol update: ', item);
    try {
        Rol.update(item, { where: { id: item.id}})
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
        console.log('Rol update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Creamos esta funcion que sirve para realizar peticiones DELETE
//a la base de datos, para poder borrar un rolo en especifico
//en base a su id
const deleteItem = (item, res) => {
    console.log('Rol update: ', item);
    try {
        Rol.destroy({ where: { id: item.id}})
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
        console.log('Rol delete: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Exportamos la funciones
module.exports = {
    getAll: getAll,
    save: save,
    update: update,
    deleteItem: deleteItem,
};