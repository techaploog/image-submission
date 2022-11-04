const express = require('express');

const { 
    httpGetAllList,
    httpGetListById,
    httpDeleteListById,
 } = require('./reqlist.controller');

const requestListRouter = express.Router();

//routes
requestListRouter.get('/',httpGetAllList);
requestListRouter.get('/:id',httpGetListById);
requestListRouter.delete('/:id',httpDeleteListById);


module.exports = requestListRouter;