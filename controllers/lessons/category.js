const Category = require('../../models/lessons/category');
const { Sequelize } = require('sequelize');
const op =Sequelize.Op
const transform = require('../transforms/category');

const getAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [op.iLike]: `%${name}%` } } : null;
    console.log('categorys getAll: ', req.body);
    try {
        Category.findAll(
        {
            where:condition ,
            order: [['name', 'ASC']] 
        })
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            console.log('error category', e)
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('categorys: ', err.message);
        return res.status(500).send(err);
    }
};

const getAllOrderbyId = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [op.iLike]: `%${name}%` } } : null;
    console.log('categorys getAll: ', req.body);
    try {
        Category.findAll(
        {
            where:condition ,
            order: [['id', 'ASC']] 
        })
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('categorys: ', err.message);
        return res.status(500).send(err);
    }
};

const getAllbyName = (req, res) => {
    console.log("=====================================================================")
    console.log('category get by Name: ', req.body);
    console.log("=====================================================================")
    const name = req.query.name;    
    try {
        Category.findAll( 
        {
            where:
            {
                name:{
                [op.iLike]:`%${name}%` 
                }
            },
            order: [['name', 'ASC'],] 
        })        
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('signs: ', err.message);
        return res.status(500).send(err);
    }
};

const getOne = (req, res) => {
    const id = req.params.id;
    console.log('categorys getOne: ', id);
    try {
        Category.findByPk(id)
        .then((result)=>{
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('categorys: ', err.message);
        return res.status(500).send(err);
    }
};


const save = (item, res) => {
    console.log('category save: ', item);
    try {
        Category.create(item)
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
        console.log('category save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, res) => {
    console.log("=====================================================================")
    console.log('Category update: ', item);
    console.log("=====================================================================")
    try {
        Category.update(item, { where: { id: item.id}})
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
        console.log('category update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const deleteItem = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id:`${id}`} : null;
    try {
        Category.destroy({ where:condition})
        .then((result)=>{
            console.log('Category delete: ', req.id);
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
        console.log('Category delete: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

module.exports = {
    getAll: getAll,
    getAllbyName:getAllbyName,
    getAllOrderbyId:getAllOrderbyId,
    getOne: getOne,
    save: save,
    update: update,
    deleteItem: deleteItem,
};
