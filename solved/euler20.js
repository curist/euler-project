var bigint = require('bigint');

module.exports.facbig = function(bign) {
  if (bign.gt(1)) {
    return bign.mul(this.facbig(bign.sub(1)));
  }
  return 1;
}

module.exports.sumdigits = function(bign) {
  var bign_str = bign.toString();
  var bign_str_len = bign_str.length;
  var sum = 0;
  for (i = 0; i < bign_str_len; i++) {
    sum -= bign_str[i];
  }
  sum *= -1;
  return sum;
}

module.exports.answer = function() {
  return this.sumdigits(this.facbig(bigint(100)));
}
