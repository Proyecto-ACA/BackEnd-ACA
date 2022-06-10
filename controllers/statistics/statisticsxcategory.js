//CRUD - Category

//Dependencia
const Statisticsxcategory = require('../../models/statistics/statisticsxcategory');

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
    console.log('Statisticsxcategory getAll: ', req.body);
    try {
        Statisticsxcategory.findAll()
        .then((result)=>{
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('Statisticsxcategory getAll: ', err.message);
        return res.status(500).send(err);
    }
};

//funcion para guardar registro
const save = (item, res) => {
    console.log('Statisticsxcategory save: ', item);
    try {
        Statisticsxcategory.create(item)
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
        console.log('Statisticsxcategory save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//funcion para actualizar registro
const update = (item, res) => {
    console.log('Statisticsxcategory update: ', item);
    try {
        Statisticsxcategory.update(item, { where: { id: item.id}})
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
        console.log('Statisticsxcategory update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

//Funcion para eliminar registro
const deleteItem = (item, res) => {
    console.log('Statisticsxcategory update: ', item);
    try {
        Statisticsxcategory.destroy({ where: { id: item.id}})
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
        console.log('Statisticsxcategory delete: ', err.message);
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