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

export {
    httpGetAllItems,
    httpGetItemById,
}