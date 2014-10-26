var express = require('express');

var app = express();

var hdb = require('express3-handlebars').create({ defaultLayout: 'main' });

var kicks = require('./lib/kicks.js');

app.engine('hdb', hdb.engine);

app.set('view engine', 'hdb');

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home');
});

app.get('/signup', function(req, res){
	res.render('signUp');
});

app.get('/test', function(req, res){
	res.render('test');
});

app.get('/thumbnail', function(req, res){
	res.render('thumbnail');
});

app.get('/dash', function(req, res){
	res.render('dash');
});

app.get('/forget', function(req, res){
	res.render('forgetPassword');
});
app.get('/about', function(req, res){
	res.render('about', { kicks: kicks.getKicks() });
});

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Zimolo started on localhost:' + app.get('port') + '...');
})


