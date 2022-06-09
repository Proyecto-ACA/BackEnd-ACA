var express = require('express');
var router = express.Router();
const Signs = require('../controllers/signs/sign');

//Object routes
const routes = {
    signsGetAll: '/signs/getAll',
    signsGetOne: '/signs/getOne/:id',
    signsGetbyCategory:'/signs/getCategory',
    signsGetbyName:'/signs/getbyName',
    signsGetAllId:'/signs/getAllId',
    signsSave: '/signs/save',
    signsUpdate: '/signs/update',
    signsDelete: '/signs/delete',
}

//Ruta para obtener todas las sign
//Ordenado por nombres
router.get(routes.signsGetAll, function(req, res, next) {
    Signs.getAll(req, res);
});

//Ruta para obtener las sign segun su categoria
router.get(routes.signsGetbyCategory, function(req, res, next) {
    Signs.getallbyCategory(req, res);
});

//Ruta para buscar las sign segun su nombre
router.get(routes.signsGetbyName, function(req, res, next) {
    Signs.getAllbyName(req, res);
});

//Ruta para obtener las sign
//Ordenado por id
router.get(routes.signsGetAllId, function(req, res, next) {
    Signs.getallorderbyId(req, res);
});

//Ruta para buscar una sign por su id
router.get(routes.signsGetOne, function(req, res, next) {
    Signs.getOne(req, res);
});

//Ruta para  agregar una nueva sign
router.post(routes.signsSave, function(req, res, next) {
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
        active: req.body.active == 2 ? false: true,
    }
    console.log("=====================================================================")
    console.log("item sign save", item);
    console.log(req.body.Signs);
    console.log("=====================================================================")
    Signs.save(item, res);

});

//Ruta para actualizar una sign
router.patch(routes.signsUpdate, function(req, res, next) {
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
        active: true,
    }
    Signs.update(item, res);
});

//Ruta para eliminar una sign de la BD
router.delete(routes.signsDelete, function(req, res, next) {
    Signs.deleteItem(req, res);
});

module.exports = router;
