"use strict";

var trackBuilder = require("./modules/track"),
		PopGen = require("./modules/PopGen"),
		run = require("./modules/run"),
		car = require("./modules/car"),
		_ = require("lodash"),
		fitness = require("./modules/fitness"),
		time = Date.now();

var track = trackBuilder
	.distance(50)
	.lanes(4)
	.generateTrack();

// generate population
var gen = PopGen.limit(10).pop().get();
var optimum = _.extend(Object.create(car), {
	speed: 65
});

fitness.setOptimum(optimum);
trackBuilder.placeGen(gen);

run(gen);
