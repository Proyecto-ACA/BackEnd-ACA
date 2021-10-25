var express = require('express');
var router = express.Router();
const Test = require('../controllers/tests/test');
const Category = require('../controllers/tests/category');
const Difficulty = require('../controllers/tests/difficulty');

const routes = {
    categoryGetAll: '/category/getAll',
    categorySave: '/category/save',
    categoryDelete: '/category/delete',
    categoryUpdate: '/category/update',

    difficultyGetAll: '/difficulty/getAll',
    difficultySave: '/difficulty/save',
    difficultyDelete: '/difficulty/delete',
    difficultyUpdate: '/difficulty/update',

    testGetAll: '/test/getAll',
    testGetByCategory: '/test/getByCategory',
    testSave: '/test/save',
    testDelete: '/test/delete',
    testUpdate: '/test/update',
}

router.get(routes.categoryGetAll, function(req, res, next) {
    Category.getAll(req, res);
});

router.post(routes.categorySave, function(req, res, next) {
    let item = {
        category: req.body.category,
        name: req.body.name,
    }
    console.log(item);
    console.log(req.body.category);
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

router.get(routes.difficultyGetAll, function(req, res, next) {
    Difficulty.getAll(req, res);
});

router.post(routes.difficultySave, function(req, res, next) {
    let item = {
        id: req.params.id,
        difficulty: req.params.difficulty, //valor numerico
        name: req.params.name,
    }
    Difficulty.save(item, res);
});

router.delete(routes.difficultyDelete, function(req, res, next) {
    let item = {
        id: req.params.id,
    }
    Difficulty.delete(item, res);
});

router.patch(routes.difficultyUpdate, function(req, res, next) {
    let item = {
        id: req.params.id,
        difficulty: req.params.difficulty, //valor numerico
        name: req.params.name,
    }
    Difficulty.update(item, res);
});

router.get(routes.testGetAll, function(req, res, next) {
    Test.getAll(req, res);
});

router.get(routes.testGetByCategory, (req, res, next) => {
    Test.getByCategory(req.params.Category, res);
});

router.post(routes.testSave, function(req, res, next) {
    let item = {
        name: req.body.name,
        difficulty_id: req.body.difficulty, //id
        category_id: req.body.category, //id
    }
    Test.save(item, res);
});

router.delete(routes.testDelete, function(req, res, next) {
    let item = {
        id: req.params.id,
    }
    Test.delete(item, res);
});

router.patch(routes.testUpdate, function(req, res, next) {
    let item = {
        id: req.params.id,
        name: req.params.name,
        difficulty: req.params.difficulty, //id
        category: req.params.category, //id
    }
    Test.update(item, res);
});

module.exports = router;
