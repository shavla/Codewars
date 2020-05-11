function addUsername(list) {
  return list.map(function(a) {
    a.username = a.firstName.toLowerCase() + a.lastName[0].toLowerCase()+(new Date().getFullYear() - a.age);
    return a;
  });
}
