module.exports = {

  calculate: function (car)  {
    return (car.avgVelocity - car.avgAcceleration + 100 - car.avgDeceleration + 100 + car.speed) - this.getPenalty(car.speed) * 2
  },

  setOptimum: function (optimum) {
    this.optimum = optimum;
    this.optimum.fitness = this.calculate(this.optimum);
  },

  getOptimum: function () {
    return this.optimum;
  },

  getPenalty: function (speed) {
    if (speed <= 65) {
      return 0;
    } else {
      return speed;
    }
  },

  setFitness: function (car) {
    var fitness = this.calculate(car);
    car.fitness = fitness;
  }


};