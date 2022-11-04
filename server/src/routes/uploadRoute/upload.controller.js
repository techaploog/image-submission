const path = require('path');
const multer = require('multer');

const UPLOADE_PATH = path.join(__dirname,'..','..','..','uploaded_files');
const upload = multer({ dest: UPLOADE_PATH }).single('picture');

// D:\python_work\image-submission\server\src\routes\uploadRoute\upload.controller.js
// D:\python_work\image-submission\server\uploaded_files


function httpUploadPicture(req,res){
    // return upload(req,res,()=>{});
    return res.status(200).json({msg:"Developing ... "});
}

module.exports = {
    httpUploadPicture,
}