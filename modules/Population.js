var CarFactory = require("./carFactory"),
    randomizer = require("./randomizer");

function Population(popSize, config) {
  this.popSize = popSize;
  this.cars = [];
  this.config = config;
}

Population.prototype = {

  create: function () {
    var cf = new CarFactory(),
      i;

    for (i = 0; i < this.popSize; i++) {
      var _car = cf.createCar({
        speed: randomizer.getRan(0, this.config.maxSpeed),
        acceleration: randomizer.getRan(0, 10),
        deceleration: randomizer.getRan(0, 10)
      });

      this.cars.push(_car);
    }
  }

};

module.exports = Population;