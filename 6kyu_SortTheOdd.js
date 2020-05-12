function sortArray(array) {
   let add = [];
   for(let i = 0; i < array.length; i++){
     if(array[i] % 2 == 1) {
       add.push(array[i]);
       array[i] = -1;
     }
   }
   add.sort(function (a,b) {return a-b});
   for(let j = 0; j < array.length; j++){
     if(array[j] == -1){
       array[j] = add[0];
       add.shift();
     }
   }
   return array;
}
