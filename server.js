var express = require('express');
var app = express();
var port = 3000;

/********************Routing********************/
app.get("/", function (req, res) {
    res.redirect('/public_html/index.html');
})

/********************Init*********************/
app.listen(port, function () {
    console.log('ABCarWebsite server listening on port 3000!');
});