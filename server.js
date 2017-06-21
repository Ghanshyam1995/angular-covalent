var express = require("express");
var path = require("path");
var app = express();
var port = process.env.port || 3000;
var bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('*', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/Index.html'));
});

app.listen(3000, function() {
    console.log('App listening on port ' + port);
});