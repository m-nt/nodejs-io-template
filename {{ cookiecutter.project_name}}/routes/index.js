"use strict";

const express = require('express');
const router = express.Router()

router.use("/{{ cookiecutter.app}}", require('./{{ cookiecutter.app}}.routes'))

module.exports = router