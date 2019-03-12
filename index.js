var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post("/", function(req, res) { 
	res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "challenge": req.body.challenge }));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});