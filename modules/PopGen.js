"use strict";
var carFactory = require("./CarFactory"),
    randomizer = require("./randomizer");

var defaults = {
  limit: 2,
  pop: [],
  maxSpeed: 125
};

module.exports = {

  limit: function (limit) {
    this._limit = limit || defaults.limit;
    return this;
  },

  parents: function (pop) {
    this._parents = pop || defaults.pop;
    return this;
  },

  pop: function (pop) {
    this._pop = pop || [];
    return this;
  },

  maxSpeed: function (speed) {
    this._maxSpeed = defaults.maxSpeed;
    return this;
  },

  get: function () {
    var _speed = this._maxSpeed || defaults.maxSpeed,
        i;

    for (i = 0; i < this._limit; i++) {
      var _car = carFactory({speed: randomizer.getRan(100, _speed)});

     this._pop.push(_car);
    }
    return this._pop;
  }
};