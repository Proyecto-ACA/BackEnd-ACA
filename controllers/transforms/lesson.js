const transformLevel = require('../lessons/transformLevel');
const transformCategory = require('./category');

const transform = (records) => {
    return records.map((record) => {
        return casteo(record);
    });
}

const casteo = (record) => {
        return {
            id: record.id,
            name: record.name,
            image: record.image,
            description: record.description,
            level: transformLevel.render(record.level),
            category: transformCategory.render(record.category),
        }
}

module.exports = {
    transform : transform,
    casteo: casteo,
}