var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// connecting to the DB
mongoose.connect('mongodb://localhost/techCo');

app.get('/', indexController.index);

app.post('/createApplicant', indexController.createApplicant);

// displays a list of applicants
app.get('/applicants', indexController.showApplicants);

// //  displays the success page
app.get('/success', function(req, res){
	res.render('success')
});

// creates and applicant 
// app.post('/applicant', function(req, res){
// 	// Here is where you need to get the data
// 	// from the post body and store it in the database
	
// 	res.redirect('/success');


// });


var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
