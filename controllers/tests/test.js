//Controlador para los test
const Test = require('../../models/test/test');
const Difficulty = require('../../models/test/difficulty');
const Category = require('../../models/test/category');
const transform = require('./transformTest');

const getAll = (req, res) => {
    console.log('Test getAll: ', req.body);
    try {
        Test.findAll({
            include: [
                { model: Difficulty, as: 'difficulty'},
                { model: Category, as: 'category'},
            ],
        })
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('Test getAll: ', err.message);
        return res.status(500).send(err);
    }
};

const getById = (id, res) => {
    console.log('Test getAll: ', id);
    try {
        Test.findAll({
            include: [
                { model: Difficulty, as: 'difficulty'},
                { model: Category, as: 'category'},
            ],
            where: { id: id }
        })
        .then((result)=>{
            console.log('Test', result);
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            console.log('Test error: ', e);
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('Test getAll: ', err.message);
        return res.status(500).send(err);
    }
};

const getByCategory = (category_id, res) => {
    console.log('Test getAll: ', req.body);
    try {
        Test.findAll({
            where: { category_id: category_id},
            include: [
                { model: Difficulty, as: 'difficulty'},
                { model: Category, as: 'category'},
            ],
        })
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('Test getAll: ', err.message);
        return res.status(500).send(err);
    }
};

const getByDifficulty = (difficulty_id, res) => {
    console.log('Test getAll: ', req.body);
    try {
        Test.findAll({
            where: { difficulty_id: difficulty_id},
            include: [
                { model: Difficulty, as: 'difficulty'},
                { model: Category, as: 'category'},
            ],
        })
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('Test getAll: ', err.message);
        return res.status(500).send(err);
    }
};

const getByCategoryAndDifficulty = (difficulty_id, category_id, res) => {
    console.log('Test getAll: ', req.body);
    try {
        Test.findAll({
            where: { difficulty_id: difficulty_id, category_id: category_id},
            include: [
                { model: Difficulty, as: 'difficulty'},
                { model: Category, as: 'category'},
            ],
        })
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('Test getAll: ', err.message);
        return res.status(500).send(err);
    }
};

const save = (item, res) => {
    console.log('Test save: ', item);
    try {
        Test.create(item)
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            console.log('error test save:', e);
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('Test save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }  
};

const update = (item, res) => {
    console.log('Test update: ', item);
    try {
        Test.update(item, { where: { id: item.id}})
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
        console.log('Test update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const deleteItem = (item, res) => {
    console.log('Test update: ', item);
    try {
        Test.destroy({ where: { id: item }})
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
        console.log('Test delete: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

module.exports = {
    getAll: getAll,
    save: save,
    update: update,
    deleteItem: deleteItem,
    getByCategory: getByCategory,
    getByDifficulty: getByDifficulty,
    getByCategoryAndDifficulty: getByCategoryAndDifficulty,
    getById: getById,
};