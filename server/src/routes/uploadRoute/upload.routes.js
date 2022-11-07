const express = require('express');

const {httpUploadPicture, httpPatchStatus} = require('./upload.controller');

const uploadRouter = express.Router();

//routes
uploadRouter.post('/',httpUploadPicture);
uploadRouter.patch('/',httpPatchStatus)

module.exports = uploadRouter;