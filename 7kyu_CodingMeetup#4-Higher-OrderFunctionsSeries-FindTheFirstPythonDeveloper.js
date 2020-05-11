function getFirstPython(list) {
  let it = list.find(element => element.language === 'Python');
  if(it == undefined) return 'There will be no Python developers';
  return it.firstName + ', ' + it.country;
}
