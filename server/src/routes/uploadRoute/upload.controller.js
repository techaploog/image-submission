const path = require('path');
const formidable = require('formidable');

// const multer = require('multer');
// const upload = multer({ dest: UPLOADE_PATH }).single('picture');

const { patchStatus,getIsExistsById } = require('../../models/reqlist.model');
const { throws } = require('assert');
const { error } = require('console');

const UPLOADE_PATH = path.join(__dirname,'..','..','..','uploaded_files');
const form = new formidable.IncomingForm();

form.multiples = false;
form.maxFileSize = 0.5 * 1024 * 1024; // 500 kB
form.uploadDir = UPLOADE_PATH;

// D:\python_work\image-submission\server\src\routes\uploadRoute\upload.controller.js
// D:\python_work\image-submission\server\uploaded_files


function httpUploadPicture(req,res){
    // return upload(req,res,()=>{});
    console.log(`Uploading to : ${UPLOADE_PATH} ...`);
    
    //parsing
    form.parse(req, async (err,fields, file) => {

        if(Object.keys(file).length === 0){
            console.log("-> no file");
        }else{
            console.log(file);
        }

        if (err){
            console.log(`Upload Error. . `);
            return res.status(400).json({
                error:'upload fail'
            })
        }
    })

    return res.status(200).json({msg:"Developing ... "});
}

function httpPatchStatus(req,res){
    const itemId = String(req.body.id);
    const newStatus = Number(req.body.checkStatus);

    if (!getIsExistsById(itemId)){
        return res.status(400).json({
            err:`Cannot found request number '${itemId}'.`
        })
    }

    if (newStatus >= 0 && newStatus <= 2){
        return res.status(200).json(patchStatus(itemId,newStatus));
    }else{
        return res.status(400).json({
            err:`Invalid new status '${req.body.checkStatus}'.`
        })
    }
}

module.exports = {
    httpUploadPicture,
    httpPatchStatus,
}