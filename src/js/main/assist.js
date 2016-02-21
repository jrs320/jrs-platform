var a = require('../base/a.js');
var ca = require('../component/c-a.js');

var fn = function(v){
    console.log('invoke assist');
    a.fn('assist | a');
    ca.fn('asist | c-a');
    return v || 'assist';
};

module.exports = {
    fn : fn
};