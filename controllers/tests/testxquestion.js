const TestXQuestion = require('../../models/test/testxquestion');
const Test = require('../../models/test/test');
const Question = require('../../models/test/question');
const QuestionTranform = require('./transformQuestion');
const Sign = require('../../models/signs/sign');


const transform = (records) => {
    return records.map((record) => {
        //const sign = SignTransform(record.sign);
        //console.log(record.question);
        return {
            id: record.id,
            //lesson: LessonTransform.casteo(record.lesson),
            question: QuestionTranform.render(record.question),
        }
    });
}

const getAll = (req, res) => {
    console.log('testxquestion getAll: ', req.body);
    try {
        TestXQuestion.findAll({
            include: [
                { model: Question , as: 'question', include:[{ model: Sign , as: 'sign'}] },
                { model: Test , as: 'test'}
            ],
        })
        .then((result)=>{
            //console.log('testxquestion getall:', result);
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('testxquestion getAll: ', err.message);
        return res.status(500).send(err);
    }
};

const getById = (item, res) => {
    console.log(item);
    try {
        TestXQuestion.findAll({
            where: { test_id: item },
            include: [
                { model: Question , as: 'question', include:[{ model: Sign , as: 'sign'}] },
            ],
        })
        .then((result)=>{
            //console.log('Lessons:', result);
            //console.log('get by id', result);
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            //console.log(e)
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('testxquestion get by id error: ', err.message);
        return res.status(500).send(err);
    }
};

const save = (item, res) => {
    console.log('testxquestion save: ', item);
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
        console.log('testxquestion save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, res) => {
    console.log('testxquestion update: ', item);
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
        console.log('testxquestion update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const deleteItem = (item, res) => {
    console.log('testxquestion delete: ', item);
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
        console.log('testxquestion delete: ', err.message);
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
