var express = require('express')
    , path = require('path')
    , fleets = require('./routes/fleet');
var app = express();
var sql = require("mssql");

app.get('/', fleets.all);
app.get('/:id', fleets.id);
app.listen(5000);

console.log('corriendo en puerto 5000');