const express = require('express');

const {httpUploadPicture} = require('./upload.controller');

const uploadRouter = express.Router();

//routes
uploadRouter.post('/',httpUploadPicture);

module.exports = uploadRouter;