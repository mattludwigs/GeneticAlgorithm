"use strict";

module.exports = {
  calculate: function calculate (car) {
    return (car.avgVelocity - car.avgAcceleration + 100 - car.avgDeceleration + 100 + car.speed) - this.getPenalty(car.speed) * 2
  },

  setOptimum: function setOptimum (optimum) {
    this.optimum = optimum;
    this.optimum.fitness = this.calculate(this.optimum);
  },

  getPenalty: function getPenalty (speed) {
    if (speed <= 65) {
      return 0;
    } else {
      return speed;
    }
  },

  setFitness: function setFitness (car) {
    car.avgAcceleration = car.avgAcceleration || 0;
    car.avgDeceleration = car.avgDeceleration || 0;
    car.solveVelocity();
    car.fitness = this.calculate(car);
  },

  getFittest: function getFittest (pop) {
    var sorted = pop.sort(function fit (a, b) {
      return b.fitness - a.fitness;
    });
    return sorted[0];
  }
}