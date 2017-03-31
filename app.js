var path = require('path');
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'/app/pug'));

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index');
  	res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/',function(req,res){
  //__dirname : It will resolve to your project folder.
});

app.listen(3000, function(){
	console.log('Connected to port 3000');
});

