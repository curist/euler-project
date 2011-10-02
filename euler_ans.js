var net = require('net');
var _ = require('underscore');
_.mixin(require('underscore.string'));

var isInt = function(number) {
  var num = parseInt(number);
  if (typeof num === 'number' && _(number.toString()).trim().length === num.toString().length) {
    return true;
  }
  return false;
};

net.createServer(function(socket) {
  socket.on('data', function(data) {
    if (isInt(data)) {
      var num = parseInt(data);
    }

    if (num > 0) {
      try {
        socket.write('Hold on a sec...\n');
        var start = (new Date).getTime();
        var euler = require('euler' + num);
        var ans = euler.answer();
        var elapsed = (new Date).getTime() - start;
        socket.write('The answer for euler ' + num + ' is ' + ans);
        socket.write(', calculated in ' + elapsed + ' ms.\n');
      } catch (err) {
        console.log('To err, human:\n  ' + err + '\n');
        socket.write('We got no answer for euler ' + num + '\n');
      }
    } else {
      socket.write('We accept only positive integers.\n');
    }
  })
}).listen(4000);
