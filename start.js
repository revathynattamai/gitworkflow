var http = require('http');
var port = process.env.PORT || 5000;
var express = require('express');
var app = express();

app.use(express.static('.'));
app.listen(port, () => {
    console.log('Listening to port:', port);
});