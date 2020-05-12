function evaluate(expr,context) {
  let PI2 = Math.PI*Math.PI;
  function cos2(v){v=Math.cos(v);return v*v};
  function sin2(v){v=Math.sin(v);return v*v};
  with (Math) with (context||{}) return eval(expr);
}
