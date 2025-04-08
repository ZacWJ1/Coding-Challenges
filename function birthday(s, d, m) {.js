function birthday(s, d, m) {
    // Write your code here
    //m=number of squares
    //d=number to try to match
    
    //make a sum variable
    let count=0
    //iterate through the array
    for(let i=0;i<=s.length-m;i++){
    //make a sum variable to see if the amount is < to m length
    let sum=0
    for(let j=0;j<m;j++){
        //add each iteration of i to the j iteration m times
        sum+=s[i+j]
    }
        if(sum===d){
            count++
        }
    
       
    }
return count
}