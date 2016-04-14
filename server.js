var express = require('express');
var app = express();
var port = 3000;

app.get("/", function (req, res) {
    //res.redirect('/public_html/index.html');
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log('AIWebsite app listening on port ' + port);
});