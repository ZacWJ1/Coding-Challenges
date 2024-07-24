function getCount(str) {
    let vowels=0
    str.split('').forEach(function(c){
      if(c=='a'| c=='e'| c=='i'| c=='o'| c=='u'){
      vowels +=1
    }
      }) 
    return vowels
  }