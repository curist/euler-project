var fib_table = new Array(100);

module.exports.fib = function(n) {
  if (n <= 1) {
    return 1;
  }
  if (fib_table[n] === undefined) {
    fib_table[n] = this.fib(n - 1) + this.fib(n - 2);
  }
  return fib_table[n];
}

module.exports.f = function(n) {
  if (n <= 1)
    return 1;
  return this.f(n-1) + this.f(n-2);
}

module.exports.answer = function() {
  var sum = 0;
  for (i = 1; this.fib(i) < 4000000; i++) {
    if (this.fib(i) % 2 == 0) {
      sum += this.fib(i);
    }
  }
  return sum;
}
