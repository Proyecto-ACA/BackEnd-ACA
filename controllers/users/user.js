const User = require('../../models/users/user');

const transform = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
            rol_id:record.rol_id
        }
    });
}

const getAll = (req, res) => {
    console.log('users getAll: ', req.body);
    try {
        User.findAll()
        .then((result)=>{
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('users: ', err.message);
        return res.status(500).send(err);
    }
};

const getOne = (req, res) => {
    const id = req.params.id;
    console.log('Users getOne: ', id);
    try {
        User.findByPk(id)
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

const findUser = (item, res) => {
    console.log('User save: ', item);
    try {
        User.findOne({
            where: {
                name: item.name
            }
        })
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
        console.log('User save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const findId = (item, res) => {
    console.log('User save: ', item);
    try {
        User.findOne({
            where: {
                id: item.id
            }
        })
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
        console.log('User save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};


const save = (item, res) => {
    console.log('User save: ', item);
    try {
        User.create(item)
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
        console.log('User save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, res) => {
    console.log('User update: ', item);
    try {
        User.update(item, { where: { id: item.id}})
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
        console.log('User update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};
const deleteItem = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id:`${id}`} : null;
    console.log('usuario delete: ', req.id);
    try {
        User.destroy({ where:condition})
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
    save: save,
    getOne:getOne,
    findUser: findUser,
    findId: findId,
    update: update,
    deleteItem: deleteItem,
};
