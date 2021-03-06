//CRUD - difficulty

//dependencias 
const Statisticsxdifficulty = require('../../models/statistics/statisticsxdifficulty');

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
    console.log('Statisticsxdifficulty getAll: ', req.body);
    try {
        Statisticsxdifficulty.findAll()
        .then((result)=>{
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('Statisticsxdifficulty getAll: ', err.message);
        return res.status(500).send(err);
    }
};

//funcion para guardar registro
const save = (item, res) => {
    console.log('Statisticsxdifficulty save: ', item);
    try {
        Statisticsxdifficulty.create(item)
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
        console.log('Statisticsxdifficulty save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//funcion para actualizar registro
const update = (item, res) => {
    console.log('Statisticsxdifficulty update: ', item);
    try {
        Statisticsxdifficulty.update(item, { where: { id: item.id}})
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
        console.log('Statisticsxdifficulty update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Funcion para eliminar registro
const deleteItem = (item, res) => {
    console.log('Statisticsxdifficulty update: ', item);
    try {
        Statisticsxdifficulty.destroy({ where: { id: item.id}})
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
        console.log('Statisticsxdifficulty delete: ', err.message);
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