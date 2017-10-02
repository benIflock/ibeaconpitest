var Bleacon = require('bleacon');
var socket = require('socket.io-client')('http://localhost/scanner');

Bleacon.startScanning();
Bleacon.on('discover', function (bleacon) {
    console.log(Date(), bleacon.uuid, bleacon.major, bleacon.minor,
        bleacon.measuredPower, bleacon.rssi, bleacon.proximity, bleacon.accuracy);
        socket.emit('deviceData', {mac: bleacon.uuid, major:bleacon.major});    

})
