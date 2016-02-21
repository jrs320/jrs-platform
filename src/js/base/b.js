var fn = function(v){
    console.log('invoke b');
    return v || 'b';
};

module.exports = {
    fn : fn
};