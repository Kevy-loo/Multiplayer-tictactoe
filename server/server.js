const express = require('express');
const cors = require('cors');
const userRouter = require('./router')


const server = express();

server.use(cors());
server.use(express.json());
server.use(userRouter)


server.listen(8000, () => {
    console.log('Server is running on port 8000');
});

module.exports = server
