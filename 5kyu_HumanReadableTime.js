function humanReadable(seconds) {
  if (seconds === 0) { 
    return "00:00:00";
  }
  let HH = seconds / 3600;
  if(HH < 1){
    let MM = seconds / 60;
    if(MM < 1){
      if(seconds < 10) return "00:00:0" + seconds;
      return "00:00:" + seconds;
    }
    if(MM == 1) return "00:01:00";
    if(MM > 1){
      let M = Math.floor(seconds / 60);
      let S = seconds - M * 60;
      if(M < 10){
        if(S < 10) return "00:0" + M + ":0" + S;
        return "00:0" + M + ":" + S;
      }
      if(M >= 10){
        if(S < 10) return "00:" + M + ":0" + S;
        return "00:" + M + ":" + S;
      }
    }
  }
  if(HH == 1) return "01:00:00";
  if(HH > 1){
    let H = Math.floor(seconds / 3600);
    if(H < 10){
      let M = (seconds - H * 3600) / 60;
      if(M < 10){
        let S = seconds - H * 3600;
        if(S < 10) return "0" + H + ":0" + M + ":0" + S;
        return "0" + H + ":00:" + S;
      }
      if(M >= 10){
        let S = seconds - H * 3600 - M * 60;
        if(S < 10) return "0" + H + ":" + M +":0" + S;
        return "0" + H + ":" + M + ":" + S;
      }
    }
    if(H >= 10){
     let M = (seconds - H * 3600) / 60;
      if(M < 10){
        M =  Math.floor((seconds - H * 3600) / 60);
        let S = seconds - H * 3600;
        if(S < 10) return  H + ":0" + M + ":0" + S;
        return H + ":00:" + S;
      }
      if(M >= 10){
        M =  Math.floor((seconds - H * 3600) / 60);
        let S = seconds - H * 3600 - M * 60;
        if(S < 10) return H + ":" + M +":0" + S;
        return H + ":" + M + ":" + S;
      }
    }
  }
}
