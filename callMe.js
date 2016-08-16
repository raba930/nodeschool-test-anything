var repeatCallback = require(process.argv[2]),
    test = require('tape');

test('call me maybe', function(t) {
    t.plan(5);
    repeatCallback(5, console.log);
});
