function migratoryBirds(arr) {
    // Write your code here
    
    
    let counts= new Array(6).fill(0)//make a new array up to 6 because of 5 birdtypes
  for(const birdTypeNum of arr){
    counts[birdTypeNum]++
  }  
  let maxCount=0
  let mostFrequentType=0
  
  for(let i=1;i<6;i++){
    if(counts[i]>maxCount){
        maxCount=counts[i]
        mostFrequentType=i
    }
    else if(counts[i]===maxCount && i< mostFrequentType){
        mostFrequentType=i
    }
  }
    return mostFrequentType

}