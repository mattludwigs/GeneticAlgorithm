"use strict";

var randomizer = require("./randomizer");

module.exports = {
	speed: 0,
	fitness: 0,
	avgVelocity: 0,
	avgAcceleration: 0,
	avgDeceleration: 0,
	desiredDeceleration: 0,
	desiredAcceleration: 0,
	drive: function drive () {
		this.startTime = Date.now();
		this.startPosition = this.location.y;
		this.driving = true;
		return this;
	},

	stop: function stop () {
		this.stopTime = Date.now();
		this.driving = false;
		return this;
	},

	setDistance: function setDistance (distance) {
		this.distance = distance - this.location.y;

		return this;
	},

	totalTime: function totalTime () {
		return (this.stopTime - this.startTime);
	},

	updateY: function updateY (time) {
		// 0.001 feet/milliseconds 1
		this.location.y = this.location.y + ((0.001 * (this.speed * 1.46667) * time));
		return this;
	},

	solveVelocity: function solveVelocity () {
		this.avgVelocity = this.distance / this.totalTime;
		return this;
	},

	location: {
		x: 0,
		y: 0
	}
};

