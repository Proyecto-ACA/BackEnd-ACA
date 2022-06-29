const Lesson = require('../../models/lessons/lesson');
const Level = require('../../models/lessons/level');
const Category = require('../../models/lessons/category');

const transform = require('../transforms/lesson');

const getAll = (req, res) => {
    console.log('lesson getAll: ', req.body);
    try {
        Lesson.findAll({
            include: [
                { model: Level , as: 'level'},
                { model: Category , as: 'category'},
            ],
            order: [['id', 'ASC']]
        })
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            console.log('lesson ge all error: ', e)
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('lesson getAll: ', err.message);
        return res.status(500).send(err);
    }
};

const getOne = (id, res) => {
    console.log('lesson getOne: ', id);
    try {
        Lesson.findAll({
            include: [
                { model: Level , as: 'level'},
                { model: Category , as: 'category'},
            ],
            where: {id : id }
        })
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            console.log('lesson ge all error: ', e)
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('lesson getAll: ', err.message);
        return res.status(500).send(err);
    }
};

const getByCategory = (category_id, res) => {
    console.log('lesson get by category: ', req.body);
    try {
        Lesson.findAll({
            where: { category_id: category_id}
        })
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('lesson get by category: ', err.message);
        return res.status(500).send(err);
    }
};

const getByDifficulty = (difficulty_id, res) => {
    console.log('lesson get by dificultty: ', req.body);
    try {
        Lesson.findAll({
            where: { difficulty_id: difficulty_id}
        })
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('lesson get by category: ', err.message);
        return res.status(500).send(err);
    }
};

const getByCategoryAndDifficulty = (category_id, difficulty_id, res) => {
    console.log('lesson get by dificultty: ', req.body);
    try {
        Lesson.findAll({
            where: { difficulty_id: difficulty_id, category_id: category_id }
        })
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('lesson get by category: ', err.message);
        return res.status(500).send(err);
    }
};

const save = (item, res) => {
    console.log('lesson save: ', item);
    try {
        Lesson.create(item)
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
        console.log('lesson save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, res) => {
    console.log('lesson update: ', item);
    try {
        Lesson.update(item, { where: { id: item.id}})
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
        console.log('lesson update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const deleteItem = (item, res) => {
    console.log('lesson update: ', item);
    try {
        Lesson.destroy({ where: { id: item}})
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
        console.log('lesson delete: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

module.exports = {
    getAll: getAll,
    getOne: getOne,
    save: save,
    update: update,
    deleteItem: deleteItem,
    getByCategory: getByCategory,
    getByDifficulty: getByDifficulty,
    getByCategoryAndDifficulty: getByCategoryAndDifficulty,
};