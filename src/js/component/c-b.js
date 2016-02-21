var a = require('../base/a.js');
var b = require('../base/b.js');

var fn = function(v){
    console.log('invoke c-b');
    a.fn('c-b | a');
    b.fn('c-b | b');
    return v || 'c-b';
};

module.exports = {
    fn : fn
};