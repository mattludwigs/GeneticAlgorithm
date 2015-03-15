var randomizer = require("./randomizer");

function Car(speed, acceleration, deceleration) {
	this.speed = speed;
	this.desiredAcceleration = acceleration;
	this.desiredDeceleration = deceleration;
	this.fitness = 0;
	this.avgAcceleration = 0;
	this.avgDeceleration = 0;
	this.avgVelocity = 0;
	this.driving = false;
	this._id = randomizer.genId();

	this.location = {
		x: "",
		y: ""
	};
}

Car.prototype = {

	setXLocation: function (number) {
		this.location.x = number;
		this.driving = true;
	},

	setYLocation: function (number) {
		this.location.y = number;
	},

	drive: function () {
		var newY = Math.round((this.speed * 1.5) * 0.25),
				currentYInt;

		if (typeof(this.location.y) !== "number") {
			currentYInt = parseInt(this.location.y, 10);
		} else {
			currentYInt = this.location.y;
		}
		this.location.y = currentYInt += newY;
	}

};

module.exports = Car;

