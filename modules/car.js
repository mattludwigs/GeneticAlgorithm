function Car(speed, acceleration, deceleration) {
	this.speed = speed;
	this.desiredAcceleration = acceleration;
	this.desiredDeceleration = deceleration;
	this.fitness = 0;
	this.avgAcceleration = 0;
	this.avgDeceleration = 0;
	this.avgVelocity = 0;
}

Car.prototype = {

};

module.exports = Car;

