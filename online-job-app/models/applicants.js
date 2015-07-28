var mongoose = require('mongoose');

var applicantSchema = mongoose.Schema({
	name 		: {type : String}, 
	bio 		: {type : String},
	skills 		: {type : Array}, 
	years	 	: {type : Number},
	why			: {type : String},
});

var Applicant = mongoose.model('people', applicantSchema);

module.exports = Applicant;