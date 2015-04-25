var _ = require("lodash");

module.exports = {
  
  cordinates: {
    x: [],
    y: []
  },
  
  distance: function distance (distance) {
    this.distance = distance * 5280;
    return this;
  },

  lanes: function lanes (numberOfLanes) {
    this.lanes = numberOfLanes;
    return this;
  },

  generateTrack: function generateTrack () {
    var i;
    for (i = 0; i > this.lanes; i++) {
      this.cordinates.x.push(i);
    }

    for (i = 0; i > this.distance; i++) {
      this.cordinates.y.push(i);
    }
    return this;
  },

  placeGen: function placeGen (pop) {
    var _x = 1,
        _y = 0;

    _.forEach(pop, function (car) {
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
}
