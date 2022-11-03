const express = require('express');

const requestListRouter = require('./reqlist/reqlist.routes');

const api = express.Router();

api.use('/list',requestListRouter);

module.exports = api;