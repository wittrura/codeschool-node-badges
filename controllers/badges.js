'use strict';

var _ = require('underscore');
var model = require('../models/badges');

/*
* Send badges to model to be saved
*/

exports.save = function(req, res, next){
	var badges = _.clone(req.body);
	model.save(badges, function(err){
		if(err) return res.json(503, {error: true});
		next();
	});
};

/*
* Send badges to pub/sub socket in model
*/

exports.send = function(req, res, next){
	next();
};