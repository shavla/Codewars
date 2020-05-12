function DNAStrand(dna){
   let each = dna.split("");
   for(let i = 0; i < each.length; i++){
      if(each[i] == "A") {each[i] = each[i].replace("A","T"); continue;} 
      if(each[i] == "T") {each[i] = each[i].replace("T","A"); continue;}
      if(each[i] == "G") {each[i] = each[i].replace("G","C"); continue;}
      if(each[i] == "C") {each[i] = each[i].replace("C","G"); continue;}
  }  
  return each.join("");
}
