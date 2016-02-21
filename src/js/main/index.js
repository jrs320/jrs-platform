require('../../styles/index.scss');

var a = require('../base/a.js');
var b = require('../base/b.js');
var ca = require('../component/c-a.js');
var cb = require('../component/c-b.js');
var cc = require('../component/c-c.js');
var assist = require('assist.js');

var content = [
    a.fn('index | a'),
    b.fn('index | b'),
    ca.fn('index | c-a'),
    cb.fn('index | c-b'),
    cc.fn('index | c-c'),
    assist.fn('index | assist')
];

$("#main").html(content.join("<br/>"));