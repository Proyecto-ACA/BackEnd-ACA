var express = require('express');
var router = express.Router();
const Category = require('../controllers/lessons/category');

const routes = {
    categoryGetAll: '/category/getAll',
    categoryOrderbyId: '/category/getAllOrderbyId',
    categoryGetOne: '/category/getOne/:id',
    categorySave: '/category/save',
    categoryDelete: '/category/delete',
    categoryUpdate: '/category/update',
}

router.get(routes.categoryGetAll, function(req, res, next) {
    Category.getAll(req, res);
});

router.get(routes.categoryOrderbyId, function(req, res, next) {
    Category.getAllOrderbyId(req, res);
});

router.get(routes.categoryGetOne, function(req, res, next) {
    Category.getOne(req, res);
});

router.post(routes.categorySave, function(req, res, next) {
    let item = {
        name: req.body.name?req.body.name:false,
        image: req.body.image?req.body.image:false,
        
    }
    console.log(item);
    console.log(req.body.name);
    console.log(req.body.image);
    Category.save(item, res);
});

router.delete(routes.categoryDelete, function(req, res, next) {
    let item = {
        id: req.params.id,
    }
    Category.delete(item, res);
});

router.patch(routes.categoryUpdate, function(req, res, next) {
    if(!req){
        console.log("=====================================================================")
        console.log(" ERROR al querer meter "+req.body.Cateory)
        console.log("=====================================================================")

    }
    let item = {
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
    }
    Category.update(item, res);
});

module.exports = router;
