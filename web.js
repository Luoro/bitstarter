var express = require('express');

var app = express.createServer(express.logger());


var fs=require('fs');

app.get('/', function(request, response) {
	var archivo = fs.readFile('index.html', 'utf-8');
	var buf = new Buffer(archivo, 'utf-8');
	response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
