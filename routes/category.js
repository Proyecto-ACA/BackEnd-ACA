var express = require('express');
var router = express.Router();
const Category = require('../controllers/lessons/category');

const routes = {
    categoryGetAll: '/category/getAll',
    categorySave: '/category/save',
    categoryDelete: '/category/delete',
    categoryUpdate: '/category/update',
}

router.get(routes.categoryGetAll, function(req, res, next) {
    Category.getAll(req, res);
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
    let item = {
        id: req.params.id,
        category: req.params.category,
        name: req.params.name,
    }
    Category.update(item, res);
});

module.exports = router;
