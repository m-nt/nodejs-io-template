"use strict";

module.exports = {
    LOAD_CONFIG: () => {
        Object.entries(require('../config')).forEach(entry => {
            const [key0, value0] = entry;
            Object.entries(value0).forEach(entry => {
                const [key1, value1] = entry;
                if (process.env[key1] !== undefined) {
                    require('../config')[key0][key1] = process.env[key1]
                }
            })
        })
    }
}