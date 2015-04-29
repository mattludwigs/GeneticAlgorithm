"use strict";

let PopGen = require("./PopGen"),
		car = require("./car"),
		_ = require("lodash");

module.exports = {

	oldPop: function oldPop (pop) {
		this.pop = pop;
		return this;
	},

	mate: function mate (parents) {
		let speed, desiredDeceleration, desiredAcceleration;

		speed = (parents[0].speed + parents[1].speed) / 2;
		desiredAcceleration = (parents[0].desiredAcceleration + parents[1].desiredAcceleration) / 2;
		desiredDeceleration = (parents[0].desiredDeceleration + parents[1].desiredDeceleration) / 2;

		return _.extend(Object.create(car), {
			speed: speed,
			location : {}
		});
	},

	newPop: function newPop (limit) {
		limit = limit || this.pop.length - 6;
		this.gen = PopGen.limit(limit).pop().get();
		return this;
	},

	mutate: function mutate (mutate) {
		this.mutate = mutate || 0.05;
		return this;
	},

	getTop: function getTop () {
		let child;

		this.topTwo = this.pop.sort(function (a, b) {
			return b.fitness - a.fitness;
		}).slice(0, 2);

		child = this.mate(this.topTwo);

		this.topTwo.push(child);
		return this;
	},	

	getBottom: function getBottom () {
		let child;

		this.bottomTwo = this.pop.sort(function (a, b) {
			return a.fitness - b.fitness;
		}).slice(0, 2);

		child = this.mate(this.bottomTwo);
		this.bottomTwo.push(child);
		return this;
	},

	flush: function flush () {
		this.bottomTwo = null;
		this.topTwo = null;
		this.mutate = null;
		this.pop = null;
		return this;
	},

	breed: function breed () {
		let newPop = this.bottomTwo.concat(this.topTwo).concat(this.gen);
		_.forEach(newPop, function (car) {
			car.location.x = 0;
			car.location.y = 0;
			car.startTime = false;
			car.stopTime = false;
		});

		return newPop;
	}


}