var express = require('express');
var path = require('path');
var port= process.env.PORT || 8080;


var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


 // viewed at http://localhost:8080
app.listen(port, () =>
  console.log('Example app listening at http://localhost:8080'),
);
