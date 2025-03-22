function miniMaxSum(arr) {
    let smoll= Math.min(...arr);
    let big= Math.max(...arr);
    let sum= arr.reduce((a,b)=>a+b);
    
   console.log( (sum-big)+' '+(sum-smoll))
    

}