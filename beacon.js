var Bleacon = require('bleacon');
var socket = require('socket.io-client')('http://10.0.0.5/socket');
socket.on('connect', function(){  
  console.log('connected to server');
});
Bleacon.startScanning();
Bleacon.on('discover', function (bleacon) {
    console.log(Date(), bleacon.uuid, bleacon.major, bleacon.minor,
        bleacon.measuredPower, bleacon.rssi, bleacon.proximity, bleacon.accuracy);
        socket.emit('deviceData', {mac: bleacon.uuid, major:bleacon.major});    

})
