var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get("/", function(req, res) { 
	console.log(req.body);
	res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "challenge": {} }));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});