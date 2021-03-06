//CRUD - test

//dependencias 
const Statisticsxtest = require('../../models/statistics/statisticsxtest');

const transform = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
        }
    });
}

//funcion para obtener registros
const getAll = (req, res) => {
    console.log('Statisticsxtest getAll: ', req.body);
    try {
        Statisticsxtest.findAll()
        .then((result)=>{
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('Statisticsxtest getAll: ', err.message);
        return res.status(500).send(err);
    }
};

//funcion para guardar registro
const save = (item, res) => {
    console.log('Statisticsxtest save: ', item);
    try {
        Statisticsxtest.create(item)
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
        console.log('Statisticsxtest save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//funcion para actualizar registro
const update = (item, res) => {
    console.log('Statisticsxtest update: ', item);
    try {
        Statisticsxtest.update(item, { where: { id: item.id}})
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
        console.log('Statisticsxtest update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Funcion para eliminar registro
const deleteItem = (item, res) => {
    console.log('Statisticsxtest update: ', item);
    try {
        Statisticsxtest.destroy({ where: { id: item.id}})
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
        console.log('Statisticsxtest delete: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Exportar funciones
module.exports = {
    getAll: getAll,
    save: save,
    update: update,
    deleteItem: deleteItem,
};