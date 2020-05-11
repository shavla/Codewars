function countDevelopers(list) {
  let sum = 0;
  list.find(element =>  {
    if(element.continent === 'Europe' && element.language === 'JavaScript') sum++;
  });
  return sum;
}
