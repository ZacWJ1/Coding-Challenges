function sockMerchant(n, ar) {
    // Write your code here
    let colorCounts={}
    let pairs=0
    for(const colors of ar){
        colorCounts[colors]=(colorCounts[colors]||0)+1
        if(colorCounts[colors]%2===0){
            pairs++
        }
    }
    return pairs
    
}