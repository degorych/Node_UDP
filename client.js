const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const connection = require(__dirname + '/config.js');

process.stdin.on('data', function (data) {
    client.send(data, 0, data.length, connection.port, connection.host, function (error) {
        if (error) {
            console.error('error: ' + error);
            throw error;
        } else {
            console.log('\nSend message');
        }
    });
});