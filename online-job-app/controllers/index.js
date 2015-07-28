var Applicant = require('../models/applicants.js')

var indexController = {

	index: function(req, res) {
		res.render('index');
	},

	createApplicant : function(req, res){
		// Access form data from the body
		// req.body

		var app = {
			name 		: req.body.name,
			bio 		: req.body.bio,
			skills		: req.body.skills.split(', '),
			years		: req.body.years,
			why 		: req.body.why,
		}

		// Create a new applicant
		var newApp = new Applicant(app);


		// Save that applicant
		newApp.save(function(err, doc){
			console.log('Save Err : ', err);
			if (err) {
				res.send("There was a problem with your application - " + err.message);
			}
			res.redirect('/success');
		});

	},

	showApplicants : function(req, res){
		Applicant.find({}, function(err, docs){
			res.render('applicants', { people : docs})
		})
	},

	deleteApplicant : function(req, res){
		Applicant.find({}, function(err, docs){
			
		})

	}




};

module.exports = indexController;