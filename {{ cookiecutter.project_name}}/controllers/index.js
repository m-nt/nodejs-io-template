"use strict";

const { {{ cookiecutter.app }}_controller } = require('./{{ cookiecutter.app}}.controllers')

const db = require('../db')

module.exports = {
    {{ cookiecutter.app } }_controller: new {{ cookiecutter.app }}_controller(db.{{ cookiecutter.app }}_collection)
}