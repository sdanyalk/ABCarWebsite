var express = require('express');
var app = express();
var port = 3000;
var path = require('path');

app.get("/", function (req, res) {
    app.use(express.static(__dirname));
    res.redirect('/public_html/index.html');
    //res.send('Hello World!');
    //app.use(express.static(__dirname + 'public_html'));
    //res.sendFile(path.join(__dirname + '/public_html/index.html'));
});

app.listen(port, function () {
    console.log('AIWebsite app listening on port ' + port);
});