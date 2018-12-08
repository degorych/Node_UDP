const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const connection = require(__dirname + '/config.js');

server.on('listening', function () {
    const params = server.address();
    console.log(`Server run at ${params.address}: ${params.port}`);
});

server.on('message', function (message, info) {
    console.log(`Server got: ${message} from client ${info.address}: ${info.port}`);
});

server.on('error', function (error) {
    console.log(`Server error: ${error.stack}`);
    server.close();
});

server.bind(connection.port, connection.host);