var serialPort = require('serialPort');

serialPort.list(function(err, ports) {
	for (var p in ports) {
		console.log(ports[p].comName);
	}
});
