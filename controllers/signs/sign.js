const Sign = require('../../models/signs/sign');
const { Sequelize } = require('sequelize');
const op =Sequelize.Op

const transform = require('../transforms/signs');

const getAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id:`${id}`} : null;
    condition.active = true;
    console.log('signs getAll: ', req.body);
    try {
        Sign.findAll( 
        {
            where:condition ,
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

const getallorderbyId = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id:`${id}`} : null;
    console.log('signs getAll: ', req.body);
    try {
        Sign.findAll( 
        {
            where:condition ,
            order: [['id', 'ASC'],] 
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

const getallbyCategory = (req, res) => {
    console.log("=====================================================================")
    console.log('sign get by category: ', req);
    console.log("=====================================================================")

    const category_id = req.query.category_id;
    var condition = category_id ? { category_id:category_id} : null;
    console.log('signs getAll: ', req.body);
    try {
        Sign.findAll( 
        {
            where:condition ,
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

const getAllbyName = (req, res) => {
    console.log("=====================================================================")
    console.log('sign get by Name: ', req.body);
    console.log("=====================================================================")
    const name = req.query.name;    
    try {
        Sign.findAll( 
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
    console.log('signs getOne: ', id);
    try {
        Sign.findByPk(id)
        .then((result)=>{
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('signs: ', err.message);
        return res.status(500).send(err);
    }
};

const save = (item, res) => {
    console.log('sign save: ', item);
    try {
        Sign.create(item)
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
        console.log('sign save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, res) => {
    console.log("=====================================================================")
    console.log('sign update: ', item);
    console.log("=====================================================================")

    try {
        Sign.update(item, { where: { id: item.id}})
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
        console.log('sign update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const deleteItem = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id:`${id}`} : null;
    console.log('sign delete: ', req.id);
    try {
        Sign.destroy({ where:condition})
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
        console.log('sign delete: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

module.exports = {
    getAll: getAll,
    getAllbyName:getAllbyName,
    getallbyCategory:getallbyCategory,
    getallorderbyId:getallorderbyId,
    getOne: getOne,
    save: save,
    update: update,
    deleteItem: deleteItem,
};