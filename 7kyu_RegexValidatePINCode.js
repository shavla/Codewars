function validatePIN (pin) {
if(pin.length === 4 ||  pin.length === 6 ) {
    if(pin < 0) return false;
    if(/^[0-9]+$/.test(pin))  {
      return true;
    }else {return false;}
  }else {
      return false;
      }
}
