var a = require('../base/a.js');
var b = require('../base/b.js');

var fn = function(v){
    console.log('invoke c-c');
    a.fn('c-c | a');
    b.fn('c-c | b');
    return v || 'c-c';
};

module.exports = {
    fn : fn
};