function nbYear(p0, percent, aug, p) {
    let years = 0;
    let population = p0;
    while(true){
      population = population + population * (percent / 100) + aug;
      years++;
      if(population >= p) break;
    }
    return years;
}
