const Sign = require('../../models/signs/sign');
const { Sequelize } = require('sequelize');
const op =Sequelize.Op


const transform = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
            category_id: record.category_id,
            sign: record.sign,
            description: record.description,
            image: record.image,
        }
    });
}

const getAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id:`${id}`} : null;
    console.log('signs getAll: ', req.body);
    try {
        Sign.findAll( {where:condition} )
        .then((result)=>{
            return res.status(200).send(transform(result));
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
    console.log('sign update: ', item);
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

const deleteItem = (item, res) => {
    console.log('sign update: ', item);
    try {
        Sign.destroy({ where: { id: item.id}})
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
    getOne: getOne,
    save: save,
    update: update,
    deleteItem: deleteItem,
};