"use strict";
// set up stuff
let _ = require("lodash"),
		trackBuilder = require("./modules/track"),
		carFactory = require("./modules/carFactory"),
		breedBuilder = require("./modules/breeder"),
		fitness = require("./modules/fitness"),
		PopGen = require("./modules/PopGen");

let randomizer = {
	getRandom: function getRandom (min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
}

let track = trackBuilder
	.distance(.25)
	.lanes(4)
	.generateTrack();

let _gen = [];

for (let i = 0; i < 10; i++) {
	_gen.push(carFactory({
		speed: randomizer.getRandom(25, 125),
		avgAcceleration: randomizer.getRandom(0,10),
		avgDeceleration: randomizer.getRandom(0,10)
	}));
}

track.placeGen(_gen);

let optimum = carFactory({
	speed: 65,
	avgVelocity: 1,
	avgAcceleration: 1,
	avgDeceleration: 1
});

fitness.setOptimum(optimum);

// run this stuff
let driving = [],
		stopped = [],
		count = 0,
		iterations = 10,
		currentGen;

function stopCar (car) {
	car.stop();
	stopped.push(car);
}
function breed (gen) {
	return breedBuilder.oldPop(gen).newPop().getTop().getBottom().breed();
}
function run (gen) {
	currentGen = gen;
	_.forEach(gen, function run (car) {
		if (!_.includes(driving, car) && car.speed !== 0) {
			if (!car.stopTime) {
				driving.push(car);
			}
		}
		if (_.includes(driving, car)) {
			car.drive(1000);
		}
	});

	function stop () {
		_.forEach(driving, function (car) {
			if (car.location.y >= car.distance) {
				stopCar(car);
			}
		});

		if (driving.length !== 0) {
			driving = [];
			run(gen);
		} else {
			if (count !== iterations) {
				console.log("running next interation: " + (count + 1));
				_.forEach(stopped, function (car) {
					fitness.setFitness(car);
				});
				let newGen = breed(stopped);
				count += 1;
				track.placeGen(newGen);
				stopped = [];
				run(newGen)
			} else {
				
				_.forEach(currentGen, function (car) {
					fitness.setFitness(car);
				});

				console.log(fitness.getFittest(currentGen));
			}
		}
	}
	setTimeout(stop, 1000);
}

run(_gen);
