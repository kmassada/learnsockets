var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 8888;

app.use(express.static(path.join(__dirname,"public")));

io.on('connection', (socket) => {
    console.log('new connection made');

    socket.emit('message-from-server', {
        greeting: 'Hello from Server'
    });

    socket.on('message-from-client',(msg) => {
        console.log(msg);
    });
});

server.listen(port, () => {
    console.log('Listening on port' + port);
});