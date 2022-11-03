const http = require('http');

const app = require('./app');
const {loadRequestList} = require('./models/reqlist.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer(){
    await loadRequestList();

    server.listen(PORT,()=>{
        console.log(`Listening on port ${PORT} ...`);
    });
}

startServer();