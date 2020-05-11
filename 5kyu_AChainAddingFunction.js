function add(n){
  let fn = function(x){ return add(n+x); }
  fn.toString = function(){ return n; }
  return fn;
}
