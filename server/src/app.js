const express = require('express');
const path = require('path');
const cors = require('cors');

const api = require('./routes/api');

//INIT
const app = express();
const STATIC_PATH = path.join(__dirname,'..','public');

//middleware
app.use(cors({
    origin:'http://localhost:3000',
}));
app.use(express.json());
app.use(express.static(STATIC_PATH));

//routes
app.use('/api',api);
app.get('/*',(req,res)=>{
    res.sendFile(path.join(STATIC_PATH,'index.html'));
});

module.exports = app;
