var path = require('path');
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'/app/pug'));

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index');
});

app.listen(3000, function(){
	console.log('Connected to port 5000');
});

