/**
 * Created by Ashish Goyal on 4/16/2017.
 */
var express = require('express');
var app = express();

var port = process.env.port || 5000;

app.use('/',function (request,response) {
    response.send('www.github.com/ashishkrgoyal/');
});

app.listen(port,function () {
    console.log('application is in running phase');
});