module.exports = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
            image: record.image,
        }
    });
}