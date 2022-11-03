const fs = require('fs');
const path = require('path');
const {parse} = require('csv-parse');

//init
const FILE_PATH = path.join(__dirname,'..','..','data','counting_list.csv');
const requestList = new Map();

function loadRequestList(){
    return new Promise((resolve,reject)=>{
        fs.createReadStream(FILE_PATH)
            .pipe(parse({
                columns: true,
            }))
            .on('data', async (data) => {
                requestList.set(data.itemNo,{...data,isChecked:false});
            })
            .on('error', (err) => {
                console.log(err);
                reject(err);
            })
            .on('end', () => {
                const totalRecords = requestList.size;
                console.log(`[INFO] Load data completed!!. Total = ${totalRecords} items.`);
                resolve();
            });
    });
}

function getAllRequests(){
    return  Array(Object.fromEntries(requestList));
}

function getIsExistsById(id){
    return requestList.has(id)
}

function getRequestById(id){
    return requestList.get(id);
}

function deleteRequestById(id){
    const targetItem = requestList.get(id);
    targetItem.isChecked = true;
    requestList.set(id,targetItem);
    return targetItem;
}

module.exports = {
    loadRequestList,
    getAllRequests,
    getIsExistsById,
    getRequestById,
    deleteRequestById,
}