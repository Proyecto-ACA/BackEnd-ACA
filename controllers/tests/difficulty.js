const Difficulty = require('../../models/test/difficulty');
const transform = require('./transformDifficuty');


const getAll = (req, res) => {
    console.log('Difficulty getAll: ', req.body);
    try {
        Difficulty.findAll()
        .then((result)=>{
            return res.status(200).send(transform.transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('Difficulty getAll: ', err.message);
        return res.status(500).send(err);
    }
};

const save = (item, res) => {
    console.log('Difficulty save: ', item);
    try {
        Difficulty.create(item)
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
        console.log('Difficulty save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, res) => {
    console.log('Difficulty update: ', item);
    try {
        Difficulty.update(item, { where: { id: item.id}})
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
        console.log('Difficulty update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const deleteItem = (item, res) => {
    console.log('Difficulty update: ', item);
    try {
        Difficulty.destroy({ where: { id: item.id}})
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
        console.log('Difficulty delete: ', err.message);
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
};