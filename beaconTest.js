var beacon  = require('bleacon');

var uuid = "";
beacon.startScanning(uuid);

becon.on('discover', function(bleacon){
console.log(bleacon.uuid);
});