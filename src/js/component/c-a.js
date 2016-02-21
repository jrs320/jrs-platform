var a = require('../base/a.js');
var b = require('../base/b.js');

var fn = function(v){
    console.log('invoke c-a');
    a.fn('c-a | a');
    b.fn('c-a | b');
    return v || 'c-a';
};

module.exports = {
    fn : fn
};