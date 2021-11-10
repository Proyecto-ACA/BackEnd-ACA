const difficulty = require('./transformDifficuty');
const category = require('./transformCategory');

const render = (record) => {
    return {
        id: record.id,
            name: record.name,
            difficulty: difficulty.render(record.difficulty),
            category: category.render(record.category)
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