let _ = require('lodash');

let track = {
	generateLanes: function generateLanes () {
		var i,
				len = this.lanes || 0;

		for (i = 0; i < len; i++) {
			
		}

	},

	generateDistance: function generateDistance () {

	},

	place: function placePop () {

	}
}

modules.exports = function trackFactory (options) {
	return _.extend(track, options);
}
