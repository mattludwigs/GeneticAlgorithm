// Dependencies
var Population = require("./modules/Population"),
		Car = require("./modules/car"),
		fitness = require("./modules/fitness"),
		Track = require("./modules/Track");


// Configs
var config = {
	iterations: 10,
	maxSpeed: 125,
	carsLen: 5,
	miles: 50,
	time: 250
};


// Run the App
(function () {
	var population = new Population(config.carsLen, config),
			i;

	// Set Optimum Car
	fitness.setOptimum(new Car(65, 0, 0));

	// Set initial Population
	population.generatePop();
	var track = new Track(4, config.miles, population.cars);

	// placeInit Cars
	track.placeCars(population.cars);

	//console.log(population.cars[0].location);

	for (var j = 0; j < track.feet; j++) {
		track.runTrack();
	}

	for (j = 0; j < population.cars.length; j++) {
		fitness.setFitness(population.cars[j]);
	}

	fitness.setFittest(population.cars);
	console.log(fitness.getFittest());

})();