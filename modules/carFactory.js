"use strict";
var car = require("./car"),
		_ = require("underscore");

module.exports = function carFactory (options) {
	return _.extend(Object.create(car), options)
}