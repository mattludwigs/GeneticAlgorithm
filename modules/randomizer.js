var latestId = 0;

module.exports = {
	getRan: function (min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	},

	genId: function () {
		return latestId++;
	}
};