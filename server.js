const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

//Routers
const showsRouter = require("./data/showsRouter.js")

server.use('/api/shows', showsRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: 'the server is running'})
})

module.exports = server;