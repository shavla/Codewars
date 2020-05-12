function tickets(peopleInLine){
  let m25 = 0, m50 = 0; 
    for (let i = 0; i < peopleInLine.length; i++) {
        switch(peopleInLine[i]){
            case 25:
                m25++;
                break;
            case 50:
                m25 > 0 ? m25-- : m25 = -1;
                m50++;
                break;
            case 100:
                m25 > 0 && m50 > 0 ? m50-- : (m25 > 2 ? m25 -= 2 : m25 = -1);
                m25--;
                break;
        }
       if(m25<0){
          return "NO";
       }
    }
    return "YES";
}
