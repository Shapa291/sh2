var express = require('express');

var app = express();

//Установка механизма представления handlebars
var handlebars = require('express-handlebars')
    .create({defaultLayout:'main'});
    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');

var fortune = require('./lib/fortune.js');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about', {fortune: fortune.getFortune});
});

// Пользовательская странциа 404
app.use(function(req, res){
    res.status(404);
    res.render('404');
});
// Пользовательская страница 500
app.use(function(req, res, err, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express запущен на http://localhost:' + app.get('port') + '; Нажмите на Ctrl+C для завершения');
});