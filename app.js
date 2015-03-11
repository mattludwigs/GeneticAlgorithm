// Dependencies
var Population = require("./modules/Population"),
		Car = require("./modules/car"),
		fitness = require("./modules/fitness");


// Configs
var config = {
	iterations: 10,
	maxSpeed: 125,
	carsLen: 4,
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

	// Run through track

	//

})();