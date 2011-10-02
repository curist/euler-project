var table = new Array(100000);
var len = table.length;
var sqrtlen = Math.ceil(Math.sqrt(len));

for (var i = 2; i < sqrtlen; i++) {
  if(table[i]) {
    continue
  }
  for (var j = i * 2; j < len; j+=i) {
    table[j] = 0;
  }
}

module.exports.isPrime = function(n) {
  if (table[n] === undefined) {
    return true;
  }
  return false;
};

module.exports.nth_triangle_number = function(n) {
  return (n + 1) * n / 2;
};

// counts for the total number of factors for number n
module.exports.factors_count = function(n) {
  var total_counts = 1;
  var p = 2;
  var i = -1;

  while (n > 1) {
    if (n % p === 0) {
      var counts = 0;
      while(n % p === 0) {
        n /= p;
        counts ++;
      }
      total_counts *= (1 + counts);
    }

    // find next prime number
    for (j = p + 1; j < len; j++) {
      if (this.isPrime(j)) {
        p = j;
        break;
      }
    }
  }
  return total_counts;
};

module.exports.answer = function() {
  for (i = 0; ; i++) {
    if (this.factors_count(this.nth_triangle_number(i)) >= 500) {
      break;
    }
  }
  return this.nth_triangle_number(i);
};
