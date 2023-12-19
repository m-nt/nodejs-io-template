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
    },
    FROM_ENV: /**
     * @param {any} defualt
     * @param {String} env
     * @returns {String}
     */ (defualt, env) => {
        if (process.env[env] != null) return process.env[env];
        else return defualt || undefined;
    },
    GET_TIME: (timestamp) => {
        return new Intl.DateTimeFormat("en-US", timezone_options)
            .format(timestamp)
            .replace("، ", "T")
            .replace(" ", "");
    },
    LOGGER: /**
     * @param {any | undefined} from
     * @param {any | undefined} to
     * @param {any | undefined} message
     * @param {number | 5} size
     * @param {number} status
     */ (from, to, message, status, size = 5) => {
        let timestamp = require("./index").GET_TIME(new Date(Date.now()));
        let data = JSON.stringify(message);
        let formated_string = "";
        if (data != null) {
            if (data.length < size * size) formated_string = data;
            else {
                let first_index = data.slice(0, size);
                let last_index = data.slice(data.length - size, data.length);
                formated_string = `${first_index}${".".repeat(
                    size
                )}${last_index}`;
            }
        }
        console.log(
            `${timestamp} - "${from} ${to}" ${status} ${formated_string} `
        );
    },
}
