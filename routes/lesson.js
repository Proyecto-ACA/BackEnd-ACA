var express = require('express');
var router = express.Router();
const Lesson = require('../controllers/lessons/lesson');
const Category = require('../controllers/lessons/category');
const Level = require('../controllers/lessons/level');
const LessonSign = require('../controllers/lessons/lessonxsign');

const routes = {
    categoryGetAll: '/category/getAll',
    categorySave: '/category/save',
    categoryDelete: '/category/delete',
    categoryUpdate: '/category/update',

    levelGetAll: '/level/getAll',
    levelSave: '/level/save',
    levelDelete: '/level/delete',
    levelUpdate: '/level/update',

    lessonGetAll: '/lesson/getAll',
    lessonGetByCategory: '/lesson/getByCategory',
    lessonGetByDifficulty: '/lesson/getByDifficulty',
    lessonGetByCategoryAndDifficulty: '/lesson/getByCategoryAndDifficulty',
    lessonSave: '/lesson/save',
    lessonDelete: '/lesson/delete',
    lessonUpdate: '/lesson/update',

    lessonsignGetAll: '/lessonsign/getAll',
    lessonsignGetById: '/lessonsign/get',
    lessonsignSave: '/lessonsign/save',
    lessonsignDelete: '/lessonsign/delete',
    lessonsignUpdate: '/lessonsign/update',
}


router.get(routes.categoryGetAll, function(req, res, next) {
    Category.getAll(req, res);
});

router.post(routes.categorySave, function(req, res, next) {
    let item = {
        category: req.body.category,
        name: req.body.name,
        image: req.body.image,
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
        image: req.params.image,
    }
    Category.update(item, res);
});

router.get(routes.levelGetAll, function(req, res, next) {
    Level.getAll(req, res);
});

router.post(routes.levelSave, function(req, res, next) {
    let item = {
        level: req.body.level,
        name: req.body.name,
    }
    console.log(item);
    console.log(req.body.level);
    Level.save(item, res);
});

router.delete(routes.levelDelete, function(req, res, next) {
    let item = {
        id: req.params.id,
    }
    Level.delete(item, res);
});

router.patch(routes.levelUpdate, function(req, res, next) {
    let item = {
        id: req.params.id,
        level: req.params.level,
        name: req.params.name,
    }
    Level.update(item, res);
});

router.get(routes.lessonGetAll, (req, res, next) => {
    Lesson.getAll(req, res);
});

router.get(routes.lessonGetByCategory, (req, res, next) => {
    Lesson.getByCategory(req.params.Category, res);
});

router.get(routes.lessonGetByCategoryAndDifficulty, (req, res, next) => {
    Lesson.getByCategory(req.params.Category, req.params.difficulty, res);
});

router.get(routes.lessonGetByDifficulty, (req, res, next) => {
    Lesson.getByDifficulty(req.params.difficulty, res);
});

router.post(routes.lessonSave, (req, res, next) => {
    let item = {
        name: req.params.name,
        image: req.params.image,
        description: req.body.description,
        level_id: req.params.level,
        category_id: req.params.category,
    }
    console.log(item);
    console.log(req.body.level);
    Lesson.save(item, res);
});

router.delete(routes.lessonDelete, (req, res, next) => {
    let item = {
        id: req.params.id,
    }
    Lesson.delete(item, res);
});

router.patch(routes.lessonUpdate, (req, res, next) => {
    let item = {
        id: req.params.id,
        name: req.params.name,
        image: req.params.image,
        description: req.body.description,
        level_id: req.params.level,
        category_id: req.params.category,
    }
    Lesson.update(item, res);
});

router.get(routes.lessonsignGetAll, (req, res, next) => {
    console.log('testsign get all');
    LessonSign.getAll(req, res);
});

router.get(routes.lessonsignGetById, (req, res, next) => {
    console.log('testsign get by id');
    console.log(req.query);
    LessonSign.getById({ lesson: req.query.lesson}, res);
});

router.post(routes.lessonsignSave, (req, res, next) => {
    let item = {
        lesson_id: req.params.lesson,
        sign_id: req.params.sign,
        type: req.params.type
    }
    console.log(item);
    console.log(req.body.level);
    LessonSign.save(item, res);
});

router.delete(routes.lessonsignDelete, (req, res, next) => {
    let item = {
        id: req.params.id,
    }
    LessonSign.delete(item, res);
});

router.patch(routes.lessonsignUpdate, (req, res, next) => {
    let item = {
        id: req.params.id,
        lesson_id: req.params.lesson,
        sign_id: req.params.sign,
        type: req.params.type
    }
    LessonSign.update(item, res);
});

module.exports = router;
