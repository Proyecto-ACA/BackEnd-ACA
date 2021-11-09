const LessonXSign = require('../../models/lessons/lessonxsign');
const Lesson = require('../../models/lessons/lesson');
const Sign = require('../../models/signs/sign');
const SignTransform = require('../transforms/signs');
const LessonTransform = require('../transforms/lesson');
const transform = (records) => {
    return records.map((record) => {
        //const sign = SignTransform(record.sign);
        return {
            id: record.id,
            name: record.name,
            type: record.type,
            lesson: LessonTransform.casteo(record.lesson),
            sign: SignTransform.casteo(record.sign),
        }
    });
}

const getAll = (req, res) => {
    console.log('LessonXSign getAll: ', req.body);
    try {
        LessonXSign.findAll({
            include: [
                { model: Sign , as: 'sign' },
                { model: Lesson , as: 'lesson' },
            ],
        })
        .then((result)=>{
            console.log('Lessons:', result);
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('LessonXSign getAll: ', err.message);
        return res.status(500).send(err);
    }
};

const getById = (item, res) => {
    try {
        LessonXSign.findAll({
            where: { lesson_id: item.lesson },
            include: [
                { 
                    model: Sign , as: 'sign',
                    model: Lesson , as: 'lesson',
                },
            ],
        })
        .then((result)=>{
            console.log('Lessons:', result);
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('LessonXSign getAll: ', err.message);
        return res.status(500).send(err);
    }
};

const save = (item, res) => {
    console.log('LessonXSign save: ', item);
    try {
        LessonXSign.create(item)
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
        console.log('LessonXSign save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, res) => {
    console.log('LessonXSign update: ', item);
    try {
        LessonXSign.update(item, { where: { id: item.id}})
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
        console.log('LessonXSign update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const deleteItem = (item, res) => {
    console.log('LessonXSign update: ', item);
    try {
        LessonXSign.destroy({ where: { id: item.id}})
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
        console.log('LessonXSign delete: ', err.message);
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
    getById: getById,
};
