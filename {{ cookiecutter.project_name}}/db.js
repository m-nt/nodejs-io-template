"use strict";

const mongoose = require('mongoose');
const config = require('./config').{{ cookiecutter.app }}_config;

const client = mongoose.createConnection(config.DATABASE_URL)
client.db = config.SERVICE_NAME

module.exports = {
    '{ { cookiecutter.app } }_collection': client.collection('{{ cookiecutter.app }}')
}