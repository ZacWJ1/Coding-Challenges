function plusMinus(arr) {
    // Write your code here
    //if >0 <0 or =0
    let neg=0
    let pos=0
    let zero=0
   let n= arr.length
    for(let i=0;i<n;i++){
        if(arr[i]<0){
        neg++
       
    }else if(arr[i]>0){
        pos++
        
    }else{
        zero++
       
    }
    
    }
    console.log((pos/n).toFixed(6)),
    console.log((neg/n).toFixed(6)),
    console.log((zero/n).toFixed(6))
    
}