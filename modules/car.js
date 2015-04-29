"use strict";

var randomizer = require("./randomizer");

module.exports = {
	speed: 0,
	distance: 0,
	startTime: false,
	stopTime: false,
	driving: false,
	avgVelocity: 0,
	fitness: 0,
	drive: function drive (time) {
		if (!this.startTime) {
			this.startTime = Date.now();
		}
		this.driving = true;
		this.updateY(time);
	},
	stop: function stop () {
		if (!this.stopTime) {
			this.stopTime = Date.now();
		}
		this.driving = false;
		this.totalTime = this.stopTime - this.startTime
	},
	updateY: function (time) {
		this.location.y = this.location.y + ((0.001 * (this.speed * 1.46667) * time));
	},
	solveVelocity: function solveVelocity () {
		this.avgVelocity =  this.distance / this.totalTime;
	}
}


