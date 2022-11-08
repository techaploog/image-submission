const API_URL = 'http://localhost:8000';

// load all Items Check and return as JSON
async function httpGetAllItems(){
    console.log('[httpGetAllItems] fetching data...');
    const response = await fetch(`${API_URL}/api/list`);
    return await response.json();
}

async function httpGetItemById(id){
    console.log('[httpGetItemById] fetching data...')
    const response = await fetch(`${API_URL}/api/list/${id}`);
    return await response.json();
}

async function httpPatchItemStatus(id,itemStatus){
    console.log('[httpPatchItemStatus] fetching data...')
    const response = await fetch(`${API_URL}/api/upload/`,{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "id":id,
            "checkStatus":itemStatus
        })
    });
    return await response.json();
}

//TODO: httpPostSubmitItem

export {
    httpGetAllItems,
    httpGetItemById,
    httpPatchItemStatus,
}