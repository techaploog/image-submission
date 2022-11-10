const path = require("path");
const formidable = require("formidable");
const fs = require('fs');

const { patchStatus, getIsExistsById } = require("../../models/reqlist.model");

const UPLOADE_PATH = path.join(__dirname, "..", "..", "..", "uploaded_files");

// form.multiples = false;
// form.maxFileSize = 0.5 * 1024 * 1024; // 500 kB
// form.uploadDir = UPLOADE_PATH;

// D:\python_work\image-submission\server\src\routes\uploadRoute\upload.controller.js
// D:\python_work\image-submission\server\uploaded_files

function httpUploadPicture(req, res) {
  const form = formidable({ multiples: true });
  
  form.multipls = false;
  form.maxFilesize = 0.5 * 1024 * 1024; // 500 kB
  form.uploadDir = UPLOADE_PATH;

//   console.log(`Uploading to : ${UPLOADE_PATH} ...`);

  form.parse(req, (err, fields, files) => {
    // console.log("[DEBUG] fields = ",fields);
    // console.log("[DEBUG] files = ",files);
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "upload fail",
        success: false,
      });
    }

    const currentTime = Number(new Date()).toString();
    const recFile = files.countImg;
    const recFilePath = recFile.filepath;
    const oldFileName = recFile.originalFilename;

    const {countKanban,countType,countResult} = fields;
    const newFileName = `${countKanban}_${countType === '0' ? 'box' : 'pcs'}_${countResult === ''? "0" : countResult}_${currentTime}.${oldFileName.split('.').slice(-1)}`

    // console.log("currentTime -> ",currentTime);
    // console.log("full path -> ",recFilePath);
    // console.log("dir -> ",path.dirname(recFilePath));
    // console.log("oldFileName -> ",oldFileName);
    // console.log("newFileName -> ",newFileName)

    try{
        fs.rename(recFilePath,path.join(path.dirname(recFilePath),newFileName),(err)=>{
            err ? console.log(err) : null ;
        });
    }catch (err){
        console.log(err);
    }

  });

  return res.status(200).json({ success: true });
}

function httpPatchStatus(req, res) {
  const itemId = String(req.body.id);
  const newStatus = Number(req.body.checkStatus);

  if (!getIsExistsById(itemId)) {
    return res.status(400).json({
      err: `Cannot found request number '${itemId}'.`,
    });
  }

  if (newStatus >= 0 && newStatus <= 2) {
    return res.status(200).json(patchStatus(itemId, newStatus));
  } else {
    return res.status(400).json({
      err: `Invalid new status '${req.body.checkStatus}'.`,
    });
  }
}

module.exports = {
  httpUploadPicture,
  httpPatchStatus,
};
