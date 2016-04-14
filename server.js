var express = require('express');
var app = express();
var port = 3000;

app.get("/", function (req, res) {
    res.redirect('/root/ABCarWebsite/public_html/index.html');
});

app.listen(port, function () {
    console.log('AIWebsite app listening on port ' + port);
});