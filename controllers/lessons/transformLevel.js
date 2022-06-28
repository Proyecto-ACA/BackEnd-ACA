
//Este funcion nos permite crear un objeto que funciona como una plantilla de como
//queremos que esten los datos
const render = (record) => {
    return {
        id: record.id,
        name: record.name,
        level: record.level
    }
}

//Esta plantilla recorre todos los elementos de un arreglo que se obtiene como
//resultado de una consulta a la base de datos sobre los niveles
const transform = (records) => {
    return records.map((record) => {
        return render(record);
    });
}

//Exportamos las dos funciones anteriores
module.exports = {
    transform: transform,
    render: render
}