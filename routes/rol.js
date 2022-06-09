//Importamos el framework express
var express = require('express');

//Aqui creamos el objeto router que nos permitira utilizar los metodos http
//Para comunicarnos con la base de datos
var router = express.Router();

//Importamos el controlador de rol que esta en la carpeta controllers
const Rol = require('../controllers/users/rol');

//Creamos un objeto JSON en el guardaremos cada una de las rutas a utilizar para los
//roles
const routes = {
    rolGetAll: '/rol/getAll',
    rolGetOne: '/rol/getOne/:id',
    rolSave: '/rol/save',
    rolUpdate: '/rol/update',
    rolDelete: '/rol/delete',
}

//Utilizamos el objeto router creado anteriormente e invocamos el metodo get para poder hacer peticiones
// a la base de datos, los parametros que recibe son: la ruta que queremos que active esa peticion en especifico
//y una funcion que llamara al metodo getAll que fue creado en el archivo rol de la carpeta Controllers y
//esto nos permitira obtener todos los roles
router.get(routes.rolGetAll, function(req, res, next) {
    Rol.getAll(req, res);
});

//Utilizamos el objeto router con el metodo get para mandar a llamar el metodo getOne que trae de la base de datos
//un rol en especifico basado en el id, los argumentos que recibe la funcion son: la ruta en la que queremos que se
//realice la peticion y una funcion que llama al metodo getOne que fue creado en el archivo rol de la carpera Controllers
router.get(routes.rolGetOne, function(req, res, next) {
    Rol.getOne(req, res);
});

//Utilizamos el objeto router con el metodo post para mandar a llamar al metodo save que inserta un nuevo rol en la
//base de datos, los argumentos que recibe son: la ruta en la que queremos que se realice la peticion y una funcion
//que llama al metodo save para poder agregar cosas a la base de datos.
router.post(routes.rolSave, function(req, res, next) {
    if(!req){
        console.log("=====================================================================")
        console.log(" ERROR al querer meter "+req.name)
        console.log("=====================================================================")

    }
    let item = {
        id: req.body.id,
        name: req.body.name,
        category_id: req.body.category_id,
        sign: req.body.sign,
        description: req.body.description,
        image: req.body.image,
        active: req.body.active,
    }
    console.log("=====================================================================")
    // console.log(item);
    console.log(req.body.Signs);
    console.log("=====================================================================")
    Rol.save(item, res);

});

//Utilizamos el objeto router junto con el metodo patch para mandar a llamar al metodo update
//que sirve para actualizar la informacion de los roles en la base de datos: los argumentos que recibe la
//funcion son: la ruta en la que queremos que se realice la peticion y una funcion que llama al metodo
//save para poder agregar cosas a la base de datos.
router.patch(routes.rolUpdate, function(req, res, next) {
    if(!req){
        console.log("=====================================================================")
        console.log(" ERROR al querer meter "+req.body.Signs)
        console.log("=====================================================================")

    }
    let item = {
        id: req.body.id,
        name: req.body.name,
        category_id: req.body.category_id,
        sign: req.body.sign,
        description: req.body.description,
        image: req.body.image,
        active: req.body.active,
    }
    Rol.update(item, res);
});

//Utilizamos el objeto router junto con el metodo delete para mandar a llamar al metodo deleteItem
//para borrar un de la base de datos un rol en especifico, los argumentos que recibe la funcion son
//la ruta y una funcion que llama al metodo deleteItem
router.delete(routes.rolDelete, function(req, res, next) {
    Rol.deleteItem(req, res);
});

//Exportamos el objeto router
module.exports = router;
