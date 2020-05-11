function getAverageAge(list) {
  return Math.round(list.reduce((result,item)=>{ return result + item.age},0)/list.length);
}
