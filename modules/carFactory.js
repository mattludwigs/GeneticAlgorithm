var Car = require("./car");

function CarFactory() {}

CarFactory.prototype = {

	createCar: function (options) {
		return new Car(options.speed, options.acceleration, options.deceleration);
	}

};

module.exports = CarFactory;