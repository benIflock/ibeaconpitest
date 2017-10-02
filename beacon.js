var Bleacon = require('bleacon');
Bleacon.startScanning();
Bleacon.on('discover', function (bleacon) {
    console.log(Date(), bleacon.uuid, bleacon.major, bleacon.minor,
        bleacon.measuredPower, bleacon.rssi, bleacon.proximity, bleacon.accuracy);
})
