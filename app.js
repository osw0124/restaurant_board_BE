const express = require('express');
const connect = require('./schemas');
const cors = require("cors");
const path = require('path');
const app = express();

const port = 4000;
const auth_router = require("./routes/auth");
const boardRouter = require('./routes/board');
const comment_router = require('./routes/comment');

const requestMiddlware = (req, res, next) => {
    console.log('Request URL:', req.originalUrl, '-', new Date());
    next();
};

connect();

app.use(cors());
app.use(requestMiddlware);
app.use('/api', [boardRouter, auth_router, comment_router]);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/node_modules', express.static(path.join('/node_modules')));


app.listen(port, () => {
    console.log(`http://localhost:${port}에 접속되었습니다.`)
});