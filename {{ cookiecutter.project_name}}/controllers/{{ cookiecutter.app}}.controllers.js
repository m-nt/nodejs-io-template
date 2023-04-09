"use strict";

const mongoose = require("mongoose");

const { {{ cookiecutter.app }} } = require("../models").{ { cookiecutter.app } }_models;

class {{ cookiecutter.app }}_controller {
    /** 
     * @param {mongoose.Collection} _collection
     */
    constructor(_collection) {
        this.collection = _collection;
    }
    async { { cookiecutter.app } } () {
        return "ok"
    }
    // TODO: add {{ cookiecutter.app}} properties and methods
}

module.exports = { { { cookiecutter.app } }_controller }