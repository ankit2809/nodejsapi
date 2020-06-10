var express = require('express')
var app = express()
port = process.env.PORT || 3000
app.use(express.static(__dirname))
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);