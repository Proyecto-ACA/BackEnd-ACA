const Pool = require('pg').Pool
require('dotenv').config();
const { Sequelize } = require('sequelize');
const async = require('async');
const connectionString = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`;
const sequelize = new Sequelize(connectionString, {
    dialact: 'postgres',
    logging: false,
    define: {
        freezeTableName: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

let models = {};

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT
});

function initSequelize() {

    sequelize.authenticate()
        .then(() => {
            console.log("Sequelize connected to DB successfully!");
            syncTables();

        }).catch((err) => {
            console.log('Error connecting to DB');
        });

}



function syncTables() {
    var order = [
        'lessons/level',
        'lessons/category',
        'signs/sign',
        'lessons/lesson',
        'lessons/lessonxsign',
        'test/category',
        'test/difficulty',
        'test/question',
        'test/test',
    ];

    async.eachSeries(order, function (file, callback) {
        models[file] = require(`../models/${file}`)
        models[file]
            .sync()
            .then(function () {
                console.log('Force-synced %s', file);
                callback();
            }).catch((err) => {
                console.log(err);
            });
    });
}

module.exports = {
    pool,
    initSequelize,
    sequelize
}