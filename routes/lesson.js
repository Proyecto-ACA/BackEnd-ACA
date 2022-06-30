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
    lessonGetOne: '/lesson/getOne',
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

