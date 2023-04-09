"use strict";

const mongoose = require("mongoose");

const { Schema } = mongoose;

const {{ cookiecutter.app }}_schema = new Schema({
    name: String,
    url: String,
})
const User_schema = new Schema({
    name: String,
    sure_name: String,
    age: String,
})
module.exports = {
    { { cookiecutter.app } }: mongoose.model('{{ cookiecutter.app}}', {{ cookiecutter.app }}_schema),
    User: mongoose.model('user', User_schema),
}