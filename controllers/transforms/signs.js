const transform = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
            category_id: record.category_id,
            sign: record.sign,
            description: record.description,
            image: record.image,
            active: record.active
        }
    });
}

const casteo = (record) => {
        return {
            id: record.id,
            name: record.name,
            category_id: record.category_id,
            sign: record.sign,
            description: record.description,
            image: record.image,
            active: record.active
        }
}

module.exports = {
    transform : transform,
    casteo: casteo,
}