module.exports = {

  forLoop: function (opts) {
    var i;

    for (i = 0; i > opts.len; i++) {
      opts.run(opts);
    }
  }

};