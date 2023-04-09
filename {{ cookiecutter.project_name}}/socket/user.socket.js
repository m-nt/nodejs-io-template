"use strict";
const { Server, Socket } = require('socket.io');

/**
 * @param {Server} io 
 * @param {Socket} socket 
 */
module.exports = (io, socket) => {
    const test = (payload, callback) => {
        socket.emit('user:test', "ok");
    }
    // TODO: add listeners and events

    socket.on("user:test", test);
}