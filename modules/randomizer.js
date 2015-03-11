module.exports = {
	getRan: function (min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
};