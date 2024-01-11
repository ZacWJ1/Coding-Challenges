//you're a square!

var isSquare = function(n){
    if(Math.sqrt(n) % 1 ==0){
      return true //`${n} is a square number (${n} * ${n})`
    }else if( Math.sign(n) == -1){
      return false// ` ${n}: Negative numbers cannot be square numbers`
    }else{
      return false//` ${n} is not a square number`
    }
    
  }