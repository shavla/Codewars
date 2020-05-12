function buildString(value, unit) {
  if (value > 0) {
    return value + ' ' + unit + (value > 1 ? 's' : '') + ', ';
  }
  return '';
}
function formatDuration (seconds) {
  if (seconds === 0) { 
    return "now";
  }
  let tmpSeconds = seconds;
  const NUM_SEC_PER_MIN = 60;
  const NUM_SEC_PER_HR = NUM_SEC_PER_MIN * 60;
  const NUM_SEC_PER_DAY = NUM_SEC_PER_HR * 24;  
  const NUM_SEC_PER_YEAR = NUM_SEC_PER_DAY * 365;
    
  let numYears = Math.floor(tmpSeconds / NUM_SEC_PER_YEAR);
  tmpSeconds -= numYears * NUM_SEC_PER_YEAR;
  let numDays = Math.floor(tmpSeconds / NUM_SEC_PER_DAY);
  tmpSeconds -= numDays * NUM_SEC_PER_DAY;
  let numHrs = Math.floor(tmpSeconds / NUM_SEC_PER_HR);
  tmpSeconds -= numHrs * NUM_SEC_PER_HR;
  let numMins = Math.floor(tmpSeconds / NUM_SEC_PER_MIN);
  let numSecs = tmpSeconds - numMins * NUM_SEC_PER_MIN;
  
  let formattedStr = buildString(numYears, 'year');
  formattedStr += buildString(numDays, 'day');
  formattedStr += buildString(numHrs, 'hour');
  formattedStr += buildString(numMins, 'minute');
  formattedStr += buildString(numSecs, 'second');
  
  let idx = formattedStr.lastIndexOf(', ');
  formattedStr = formattedStr.substring(0, idx);
  
  idx = formattedStr.lastIndexOf(', ');
  if (idx > 0) {
    formattedStr = formattedStr.substring(0, idx) + ' and ' + formattedStr.substring(idx + 2);
  }
  return formattedStr;
}
