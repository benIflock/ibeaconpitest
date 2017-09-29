var beacon  = require('bleacon');
console.log('hello there');
var uuid = "d0d3fa86-ca76-45ec-9bd9-6af4be92c89e";
beacon.startScanning(uuid, 0, 0);

beacon.on('discover', function(bleacon){
  console.log('got one');
console.log(bleacon.uuid);
});
