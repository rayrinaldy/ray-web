var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'/app/pug'));

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index');
});

app.listen(port, function(){
	console.log('Connected to port ' + port);
});

