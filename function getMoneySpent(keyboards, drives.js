function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let maxSpend=-1
    for(let i=0;i<keyboards.length;i++){
        for(let j=0;j<drives.length;j++){
            let currentSumToBuy=keyboards[i]+drives[j]
           if(currentSumToBuy<=b && currentSumToBuy>maxSpend){
            maxSpend=currentSumToBuy
           }
           
        }
    }
    return maxSpend
    

}