Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(function (element) {
    return values_list.indexOf(element) === -1;
  });
}
