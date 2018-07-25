const express = require('express')
const app = express()
var path = require('path');
app.set('view engine', 'ejs');
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})