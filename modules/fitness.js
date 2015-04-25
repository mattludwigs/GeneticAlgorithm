"use strict";

module.exprots = {
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

  setFitness: function setFitness () {

  },

  getFittest: function getFittest (pop) {
    var sorted = pop.sort(function fit (a, b) {
      return b.fitness - a.fitness;
    });

    return sorted[0];
  }
}


// module.exports = {

//   calculate: function (car)  {
//     car.solveVelocity();
//     return (car.avgVelocity - car.avgAcceleration + 100 - car.avgDeceleration + 100 + car.speed) - this.getPenalty(car.speed) * 2
//   },

//   setOptimum: function (optimum) {
//     this.optimum = optimum;
//     this.optimum.fitness = this.calculate(this.optimum);
//   },


//   setFitness: function (car) {
//     car.fitness  = this.calculate(car);
//   },

//   getFittest: function getFittest (pop) {
//     var sorted = pop.sort(function fit (a, b) {
//       return b.fitness - a.fitness;
//     });

//     return sorted[0];
//   }
// };