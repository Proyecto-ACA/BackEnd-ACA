const Rol = require('../../models/users/rol');

const transform = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
        }
    });
}

const getAll = (req, res) => {
    console.log('rols getAll: ', req.body);
    try {
        Rol.findAll()
        .then((result)=>{
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('rols: ', err.message);
        return res.status(500).send(err);
    }
};

const save = (item, res) => {
    console.log('Rol save: ', item);
    try {
        Rol.create(item)
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
        console.log('Rol save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, res) => {
    console.log('Rol update: ', item);
    try {
        Rol.update(item, { where: { id: item.id}})
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
        console.log('Rol update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const deleteItem = (item, res) => {
    console.log('Rol update: ', item);
    try {
        Rol.destroy({ where: { id: item.id}})
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
        console.log('Rol delete: ', err.message);
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