var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var router = express.Router();

app.get('/test', function (req, res) {
    res.sendFile('views/login.html', {
        root: __dirname
    })
});

router.get('/', function (req, res) {
    res.send("Bienvenidos al mejor curso web del mundo mundial");
});

router.post('/', function (req, res) {
    var nombre = req.param('nombre');
    var password = req.param('password');
    if ((nombre == "admin") && (password == "12345")) {
        res.send("Bienvenido al sistema HACKERMAN");
    } else {
        res.send("Mejor vayasé por que soy HACKERMAN");
    }

});

app.use(router);

app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});