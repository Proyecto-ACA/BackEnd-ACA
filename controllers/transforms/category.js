const render = (record) => {
    return {
        id: record.id,
        name: record.name,
        image: record.image
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