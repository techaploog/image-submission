const express = require('express');

const requestListRouter = require('./reqlistRoute/reqlist.routes');
const uploadRouter = require('./uploadRoute/upload.routes');

const api = express.Router();

api.use('/list',requestListRouter);
api.use('/upload',uploadRouter);

module.exports = api;