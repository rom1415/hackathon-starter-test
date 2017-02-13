const mongoose = require('mongoose');
const Company = require('../models/Company');
const User = require('../models/User');
const Reason = require('../models/Reason');
const WouldQuit = require('../models/WouldQuit');

WouldQuit.collection.drop();
Reason.collection.drop();
Company.collection.drop();
User.collection.drop();

Reason.collection.insert([
	{
		name: 'Car'	
	},
	{
		name: 'Salary'
	},
	{
		name: 'Company phone'
	},
	{
		name: 'Culture'
	}
], (err, docs) => {
	console.log(docs);
});


var user = new User({
	email: 'romain@gmail.com',
	password: '1234'
});

var company = new Company({
	name: 'StepStone',
	description: 'StepStone is Great!'
});

var company2 = new Company({
	name: 'Apple',
	description: 'Apple is average'
});

user.save((err) => {
	if(err) { return next(err); }
});

company2.save((err) => {
	if(err) { return next(err); }
});

company.save((err) => {
  if (err) { return next(err); }
});