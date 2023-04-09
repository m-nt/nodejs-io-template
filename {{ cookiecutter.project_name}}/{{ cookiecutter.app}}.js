"use strict";

const express = require('express');
const app = express();
const http_server = require('http').createServer(app);

// Loading configs from environment variables if available
require('./utils').usefull_functions.LOAD_CONFIG()
const { {{ cookiecutter.app }}_config, socket_config } = require('./config')

// Default CORS middleware
const cors = require('cors')
var corsOptions = {
    origin: socket_config.CORS,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

// IO server
const { Server } = require('socket.io');
const { Socket } = require('socket.io');


const io = new Server(http_server, {
    cors: {
        origin: socket_config.CORS
    }
})
// socket connection event handlers
/**
 * 
 * @param {Socket} socket 
 */
const onConnection = (socket) => {
    require('./socket').user_events(io, socket);
    socket.on('liveness', (data) => {
        socket.emit('liveness', "ok")
    })
}
io.on("connection", onConnection);


// service health check
app.get('/readness', (req, res) => {
    res.send('ok')
})
app.get('/liveness', (req, res) => {
    res.send('ok')
})

// json parser middleware
app.use(express.json());

// application routes
if ({{ cookiecutter.app }}_config.ENV === 'prod')
{
    app.use('/api/v1', require('./routes'))
    http_server.listen({{ cookiecutter.app }}_config.PORT);
}
else
{
    app.use(require('./routes'))
    http_server.listen({{ cookiecutter.app }}_config.PORT, () => { console.log(`listening on ${{{ cookiecutter.app }}_config.PORT}`) });
}
