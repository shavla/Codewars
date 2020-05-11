function greetDevelopers(list) {
  return list.map(function(x) {
    x.greeting = "Hi " + x.firstName + "," + " what do you like the most about " + x.language + "?";
    return x;
  } )
}
