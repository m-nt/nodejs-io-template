"use strict";

const express = require('express');
const { {{ cookiecutter.app }}_controller } = require('../controllers');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(await {{ cookiecutter.app }}_controller.{{ cookiecutter.app }}())
})

// TODO: add routes

module.exports = router