function solution(input, markers) {
  let results = [];
  let arr = input.split('\n');
  let counter = [];
  for(let i = 0; i < markers.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j].indexOf(markers[i]) !== -1){
        let index = arr[j].indexOf(markers[i]);
        results[j] = arr[j].slice(0, index);
        counter.push('a');
      }else if(counter[j] !== 'a'){
        results[j] = arr[j];
        counter.push(j);
      }
    }
  }
  results = results.map(val => val.trim());
  return results.join('\n');
};
