const sign = require('../transforms/signs');
const category = require('./transformCategory');

const render = (record) => {
    return {
        id: record.id,
        statement: record.statement,
        sign: sign.casteo(record.sign)
    }
}

const transform = (records) => {
    return records.map((record) => {
        return render(record);
    });
}

module.exports = {
    transform: transform,
    render: render
}