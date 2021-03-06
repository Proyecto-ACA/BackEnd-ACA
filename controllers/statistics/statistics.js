//CRUD - Statistics

//Dependencia
const Statistics = require('../../models/statistics/statistics');

const transform = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
        }
    });
}

//funcion para obtener registro
const getAll = (req, res) => {
    console.log('Statistics getAll: ', req.body);
    try {
        Statistics.findAll()
        .then((result)=>{
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('Statistics getAll: ', err.message);
        return res.status(500).send(err);
    }
};

//funcion para guardar registro
const save = (item, res) => {
    console.log('Statistics save: ', item);
    try {
        Statistics.create(item)
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
        console.log('Statistics save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//funcion para actualizar registro
const update = (item, res) => {
    console.log('Statistics update: ', item);
    try {
        Statistics.update(item, { where: { id: item.id}})
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
        console.log('Statistics update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Funcion para eliminar registro
const deleteItem = (item, res) => {
    console.log('Statistics update: ', item);
    try {
        Statistics.destroy({ where: { id: item.id}})
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
        console.log('Statistics delete: ', err.message);
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