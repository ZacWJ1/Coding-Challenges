function duplicateCount(text){
    // Convert to uppercase, sorted array
    const sortedarray = text.toUpperCase().split('').sort()
    // Filter Array Based on whether first index of a value - last index is greater than 0
    // and last index matches i (to get unique duplicates), return length
    return sortedarray.filter((val,i,arr) => 
    arr.lastIndexOf(val) - arr.indexOf(val) > 0 && arr.lastIndexOf(val) === i).length
  
   }