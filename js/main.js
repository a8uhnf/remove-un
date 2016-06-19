const fs = require('fs');

fs.unlink('/home/hanif/Downloads/a.b', function (err) {
	if (err) {
		throw err;
	}
	console.log('Deleted successfully');
})