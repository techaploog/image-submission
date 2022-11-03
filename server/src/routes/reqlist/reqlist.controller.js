const {
    getAllRequests,
    getIsExistsById,
    getRequestById,
    deleteRequestById,
} = require('../../models/reqlist.model');

async function httpGetAllList (req,res){
    return res.status(200).json(getAllRequests());
}

async function httpGetListById (req,res){
    const itemId = req.params.id;
    if (!getIsExistsById(itemId)){
        return res.status(400).json({
            err:`Cannot found request number '${itemId}'.`
        })
    }
    return res.status(200).json(getRequestById(itemId));
}

async function httpDeleteListById (req,res) {
    const itemId = req.params.id;
    if (!getIsExistsById(itemId)){
        return res.status(400).json({
            err:`Cannot found request number '${itemId}'.`
        })
    }
    return res.status(200).json(deleteRequestById(itemId));

}

module.exports = {
    httpGetAllList,
    httpGetListById,
    httpDeleteListById,
}