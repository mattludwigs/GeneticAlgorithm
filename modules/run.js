"use strict";
var _ = require("lodash"),
    fitness = require("./fitness"),
    Breeder = require("./breeder"),
    trackBuilder = require("./track"),
    driving = [];

var config = {
  iterations: 4,
  count: 1
}    

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
          car.updateY(1000);
        }
        if (driving.length > 0) {
          run(pop);
        }
      });
    }, 1000);
  } else {
    console.log("setting fitness" + " " + config.count);
    var finalGen;

    _.forEach(pop, function (car) {
      fitness.setFitness(car);
      console.log(car.avgVelocity);
    });

    if (config.count < config.iterations) {
      console.log("new pop" + " " + config.count);
      var newGen = Breeder
        .oldPop(pop)
        .newPop()
        .getTop()
        .getBottom()
        .breed();

      pop = null;

      Breeder.flush();

      trackBuilder.placeGen(newGen);

      config.count += 1;
      run(newGen);
    } else {
      console.log(fitness.getFittest(pop));
    }

  }
}

module.exports = run;
