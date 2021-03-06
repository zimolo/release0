var express = require('express');

var hdb = require('express3-handlebars').create({ defaultLayout: 'main' });

var mongoose = require('mongoose');

var user=require('./libs/membership/user.js');

var pageroute=require('./controllers/pageController.js');

var authroute=require('./controllers/authentication.js');


// Configuring Passport
var passport = require('passport');

var initPassport = require('./libs/passport/init');

initPassport(passport);
//end configuring passport

//setup express
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.json());
var expressSession = require('express-session');

app.use(expressSession({secret: 'mySecretKey'}));

app.use(passport.initialize());

app.use(passport.session());

var flash = require('connect-flash');

app.use(flash());

initPassport(passport);

app.engine('hdb', hdb.engine);

app.set('view engine', 'hdb');

app.set('port', process.env.PORT || 8080);

//setup mongodb
mongoose.connect('mongodb://localhost/zimolodb');

app.use(express.static(__dirname + '/public'));

app.use('/auth',authroute(passport));

app.use('/',pageroute(passport));



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


