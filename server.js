/**
 * Created by Ashish Goyal on 4/16/2017.
 */
var express = require('express');
var app = express();

var portal = process.env.PORT || 5000;

app.use('/',function (request,response) {
    response.end('www.github.com/ashishkrgoyal/');
});

app.listen(portal,function () {
    console.log('application is in running phase');
});