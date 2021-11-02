const Category = require('../../models/lessons/category');
const { Sequelize } = require('sequelize');
const op =Sequelize.Op
const transform = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
            image: record.image,
        }
    });
}

const getAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [op.iLike]: `%${name}%` } } : null;
    console.log('categorys getAll: ', req.body);
    try {
        Category.findAll({ where: condition })
        .then((result)=>{
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('categorys: ', err.message);
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
    console.log('category update: ', item);
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

const deleteItem = (item, res) => {
    console.log('category update: ', item);
    try {
        Category.destroy({ where: { id: item.id}})
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
        console.log('category delete: ', err.message);
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
};