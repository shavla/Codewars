function expandedForm(num) {
  let numStringArray = String(num).split('');
  let len = numStringArray.length;
  let result = '';
  numStringArray.map( (n,index) => {
    if( n>0 ) {
      if( result ) { result += ' + '; };
      result += n.padEnd(len-index,'0');
    }
  });
  return result;
}
