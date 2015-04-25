var _ = require("lodash");

function Track(config) {
  this.distance = config.distance * 5280;
  this.lanes = config.lanes;
  this.cordinates = {};
  this.cordinates.x = [];
  this.cordinates.y = [];
  return this;
}

Track.prototype = {

  generateLanes: function () {
    var i = 0;

    for (i = 0; i > this.lanes; i++) {
      this.cordinates.x.push(i);
    }
    return this;
  },

  generateDistance: function () {
    var i;

    for (i = 0; i < this.distance; i++) {
      this.cordinates.y.push(i);
    }
    return this;
  },

  placeGen: function (gen) {
    var _x = 1,
        _y = 0;

    _.forEach(gen, function (car) {
      car.location.x = _x;
      car.location.y = _y;
      car.setDistance(this.distance);

      if (_x >= this.lanes) {
        _x = 1;
        _y -= 1;
      } else {
        _x += 1;
      }
    }.bind(this));
  }
};

module.exports = Track;
