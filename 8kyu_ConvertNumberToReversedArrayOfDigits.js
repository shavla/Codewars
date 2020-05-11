function digitize(n) {
  let output = [];
  let sNumber = n.toString();
  for (let i = 0; i < sNumber.length; i++) {
    output.push(+sNumber.charAt(i));
  }
  return output.reverse();
}
