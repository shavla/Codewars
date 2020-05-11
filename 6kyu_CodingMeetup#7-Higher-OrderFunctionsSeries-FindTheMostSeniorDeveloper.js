function findSenior(list) {
  let maxAge = Math.max(...list.map(person => person.age));
  return list.filter(person => person.age === maxAge);
}
