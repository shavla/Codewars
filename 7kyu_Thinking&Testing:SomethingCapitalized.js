function testit(s){
  if (s.length === 0) return s;
      let sArr = s.split(" ");
      for (let i = 0; i < sArr.length; i++) {
            let as = sArr[i];
            if (as.length > 1) {
                sArr[i] = as.substring(0, as.length - 1) + as.substring(as.length - 1).toUpperCase();
            } else {
                sArr[i] = as.toUpperCase();
            }
        }
        return sArr.join(" ");
}
