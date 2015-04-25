var randomizer = require("./randomizer");

// function Car(speed, acceleration, deceleration) {
// 	this.speed = speed;
// 	this.desiredAcceleration = acceleration;
// 	this.desiredDeceleration = deceleration;
// 	this.fitness = 0;
// 	this.avgAcceleration = 0;
// 	this.avgDeceleration = 0;
// 	this.avgVelocity = 0;
// 	this.driving = false;
// 	this._id = randomizer.genId();
// 	this.location = {
// 		x: "",
// 		y: ""
// 	};
// }

// Car.prototype = {

// 	drive: function () {
// 		this.startTime = Date.now();
// 		this.startPosition = this.location.y;
// 		this.driving = true;
// 	},

// 	updateY: function (time) {
// 		// 0.001 feet/milliseconds 1.
// 		this.location.y = this.location.y + ((0.001 * (this.speed * 1.46667) * time));
// 	},

// 	stop: function () {
// 		this.stopTime = Date.now();
// 		this.driving = false;
// 		console.log(this.totalTime());
// 		this.solveVelocity(this.totalTime());
// 	},

// 	solveVelocity: function (totalTime) {
// 		this.avgVelocity = this.distance / totalTime;
// 	},

// 	totalTime: function () {
// 		return (this.stopTime - this.startTime);
// 	},

// 	setDistance: function (distance) {
// 		// correct for initial y position
// 		this.distance = distance - this.location.y;
// 	}

// };


module.exports = {
	speed: 0,
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

	updateY: function updateY () {
		// 0.001 feet/milliseconds 1
		this.location.y = this.location.y + ((0.001 * (this.speed * 1.46667) * time));
		return this;
	},

	solveVelocity: function solveVelocity (totalTime) {
		this.avgVelocity = this.distance / totalTime;
		return this;
	},

	location: {
		x: 0,
		y: 0
	}
};

