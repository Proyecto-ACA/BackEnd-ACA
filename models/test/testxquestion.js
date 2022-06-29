const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Question = require('./question');
const Test = require('./test');

const TestxQuestion = sequelize.define('test_x_question', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    question_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    test_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, { timestamps: false });

TestxQuestion.belongsTo(Question, { as: 'question',foreignKey: 'question_id' });
TestxQuestion.belongsTo(Test, { as: 'test',foreignKey: 'test_id' });

module.exports = TestxQuestion;