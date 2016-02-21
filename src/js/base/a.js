var fn = function(v){
    console.log('invoke a');
    return v || 'a';
};

module.exports = {
  fn : fn
};