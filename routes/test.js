var express = require('express');
var router = express.Router();
const Test = require('../controllers/tests/test');
const Category = require('../controllers/tests/category');
const Difficulty = require('../controllers/tests/difficulty');
const TestXQuestion = require('../controllers/tests/testxquestion');

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
    testGetById: '/test/get',
    testGetByCategory: '/test/getByCategory',
    testGetByDifficulty: '/test/getByDifficulty',
    testGetByCategoryAndDifficulty: '/test/getByCategoryAndDifficulty',
    testSave: '/test/save',
    testDelete: '/test/delete',
    testUpdate: '/test/update',

    testXQuestionGetAll: '/testxquestion/getAll',
    testXQuestionGetByTest: '/testxquestion/getByTest',
    testXQuestionSave: '/testxquestion/save',
    testXQuestionDelete: '/testxquestion/delete',
    testXQuestionUpdate: '/testxquestion/update',
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

router.get(routes.difficultyGetAll, (req, res, next) => {
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

router.get(routes.testGetById, (req, res, next) => {
    Test.getById(req.query.id, res);
});

router.get(routes.testGetByCategory, (req, res, next) => {
    Test.getByCategory(req.query.Category, res);
});

router.get(routes.testGetByDifficulty, (req, res, next) => {
    Test.getByDifficulty(req.query.difficulty, res);
});

router.get(routes.testGetByCategoryAndDifficulty, (req, res, next) => {
    Test.getByCategoryAndDifficulty(req.query.category ,req.query.difficulty, res);
});

router.post(routes.testSave, function(req, res, next) {
    let item = {
        name: req.body.name,
        difficulty_id: req.body.difficulty, //id
        category_id: req.body.category, //id
    }
    Test.save(item, res);
});

router.delete(routes.testDelete, (req, res, next) => {
    Test.deleteItem(req.query.id, res);
});

router.patch(routes.testUpdate, function(req, res, next) {
    let item = {
        id: req.body.id,
        name: req.body.name,
        difficulty_id: req.body.difficulty, //id
        category_id: req.body.category, //id
    }
    Test.update(item, res);
});








router.get(routes.testXQuestionGetAll, (req, res, next) => {
    TestXQuestion.getAll(req, res);
});

router.get(routes.testXQuestionGetByTest, (req, res, next) => {
    TestXQuestion.getById(req.query.test, res);
});

router.post(routes.testXQuestionSave, (req, res, next) => {
    let item = {
        test_id: req.body.test, //id
        question_id: req.body.question, //id
    }
    TestXQuestion.save(item, res);
});

router.delete(routes.testXQuestionDelete, function(req, res, next) {
    let item = {
        id: req.params.id,
    }
    TestXQuestion.delete(item, res);
});

router.patch(routes.testXQuestionUpdate, function(req, res, next) {
    let item = {
        id: req.params.id,
        test_id: req.body.test, //id
        question_id: req.body.question, //id
    }
    TestXQuestion.update(item, res);
});

module.exports = router;
