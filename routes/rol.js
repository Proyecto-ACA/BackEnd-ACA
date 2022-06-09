var express = require('express');
var router = express.Router();
const Rol = require('../controllers/users/rol');


const routes = {
    rolGetAll: '/rol/getAll',
    rolGetOne: '/rol/getOne/:id',
    rolSave: '/rol/save',
    rolUpdate: '/rol/update',
    rolDelete: '/rol/delete',
}

router.get(routes.rolGetAll, function(req, res, next) {
    Rol.getAll(req, res);
});

router.get(routes.rolGetOne, function(req, res, next) {
    Rol.getOne(req, res);
});


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

router.delete(routes.rolDelete, function(req, res, next) {
    Rol.deleteItem(req, res);
});

module.exports = router;
