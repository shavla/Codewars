function findAdmin(list, lang) {
  return list.filter(item => { return item.language == lang && item.githubAdmin == 'yes'});
}
