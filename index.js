const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = 3001;

let activeUsers = [];

io.on('connection', socket => {
    console.log('a user connected.');
    socket.on('login', username => {
        activeUsers.push({
            username,
            id: socket.id
        });
        console.log(activeUsers);
    })
});

http.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});