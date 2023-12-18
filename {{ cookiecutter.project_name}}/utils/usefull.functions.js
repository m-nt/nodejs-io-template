"use strict";
const fs = require("fs");
module.exports = {
    LOAD_CONFIG: () => {
        Object.entries(require('../config')).forEach(entry => {
            const [key0, value0] = entry;
            fs.readFile("../.env", (err, data) => {
                if (err) return;
                let arr = data.toString().split("\n");
                arr.forEach((element) => {
                    key_value = element.split("=");
                    if (key_value[0] && key_value[1]) {
                        let value = require("../config")[key0][key_value[0]]
                        if ( value ) require("../config")[key0][key_value[0]] = key_value[1]
                    }
                });
            });
            Object.entries(value0).forEach(entry => {
                const [key1, value1] = entry;
                if (process.env[key1] !== undefined) {
                    require('../config')[key0][key1] = process.env[key1]
                }
            })
        })
    }
}
