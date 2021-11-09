const transform = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
            image: record.image,
            description: record.description
        }
    });
}

const casteo = (record) => {
        return {
            id: record.id,
            name: record.name,
            image: record.image,
            description: record.description
        }
}

module.exports = {
    transform : transform,
    casteo: casteo,
}