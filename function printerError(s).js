function printerError(s) {
    // your code
  let count = 0
  for(let i=0; i<s.length;i++){
    if(s[i]>'m'){
      count++
    }
  }
  return count+'/'+s.length
}