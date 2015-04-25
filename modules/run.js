var _ = require("lodash"),
    fitness = require("./fitness"),
    driving = [];

function run(pop) {

  _.forEach(pop, function (car) {
    if (car.location.y >= car.distance) {
      if (_.indexOf(driving, car) > -1) {
        _.pull(driving, car);
      }
      if (car.driving) {
        car.stop();
      }
      return;
    }

    if (car.speed === 0) {
      car.fail = true;
      return;
    }

    if (_.indexOf(driving, car) === -1) {
      driving.push(car);
      car.drive();
    }

  });

  if (driving.length > 0) {
    setTimeout(function () {
      _.forEach(driving, function (car) {
        if (car) {
          car.updateY(250);
        }
        run(pop);
      });
    }, 250);
  } else {
    _.forEach(pop, function (car) {
      fitness.setFitness(car);
      console.log(car.fitness);
      console.log(car.speed);
    })
  }
}

module.exports = run;
