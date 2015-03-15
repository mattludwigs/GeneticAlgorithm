var randomizer = require("./randomizer"),
    Array = require("../utils/array.include");

function Track(maxLanes, maxMiles, cars) {
  var _y,
      _yCount = 0,
      _xCount = 1,
      _x,
      i;

  this.feet = maxMiles * 5280;
  this.lanes = maxLanes;
  this.corrdinates = {};
  this.corrdinates.x = [];
  this.corrdinates.y = [];
  this.cars = cars;

  console.log("TRACK: feet: " + this.feet);

  for (i = 0; i < this.lanes; i++) {
    this.corrdinates.x.push(_xCount);
    _xCount++;
  }

  for (i = 0; i < this.feet; i++) {
    this.corrdinates.y.push(_yCount);
    _yCount++;
  }
}


Track.prototype = {

  placeCars: function (cars) {
    var i,
        len = cars.length;

    this.carsWaiting = [];
    this.takenLanes = [];

    for (i = 0; i < len; i++) {
      var x = randomizer.getRan(1 ,4);

      if (this.takenLanes.length !== this.lanes.length) {
        if (!this.takenLanes.includes(x)) {
          cars[i].setXLocation(x);
          cars[i].setYLocation(0);
          this.takenLanes.push(x);
        } else {
          this.carsWaiting.push(cars[i]);
        }
      }
    }
  },

  runTrack: function () {
    var i,
        cars = this.cars;
        len = cars.length;

    for (i = 0; i < len; i++) {
      if (cars[i].location.y < this.feet) {
        if (cars[i].driving) {
          cars[i].drive();
        }
      }
    }

    if (this.carsWaiting.length) {
      this.placeCars(this.carsWaiting);
      this.runTrack();
    }
  }

};

module.exports = Track;