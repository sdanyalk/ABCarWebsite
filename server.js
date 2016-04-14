var express = require('express');
var app = express();
var port = 4000;

app.get("/", function (req, res) {
    //res.redirect('/public_html/index.html');
    res.redirect('www.google.com');
});

app.listen(port);

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});