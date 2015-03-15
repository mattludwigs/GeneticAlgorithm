

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
    car.fitness  = this.calculate(car);
  },

  setFittest: function (cars) {
    var currentFittest,
        i;

    for (i = 0; i < cars.length; i++) {
      var car = cars[i];

      if (!currentFittest) {
        currentFittest = car;
      } else {
        if (this.optimum.fitness - currentFittest.fitness > this.optimum.fitness - car.fitness) {
          currentFittest = car;
        }
      }
    }

    this.fittest = currentFittest;
  },

  getFittest: function () {
    return this.fittest;
  }


};