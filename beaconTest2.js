var beacon  = require('bleacon');
console.log('hello there');
var uuid = ""d0611e78bbb44591a5f8487910ae4366"";
beacon.startScanning(uuid, 0, 0);

beacon.on('discover', function(bleacon){
  console.log('got one');
console.log(bleacon.uuid);
});
