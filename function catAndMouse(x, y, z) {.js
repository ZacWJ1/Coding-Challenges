function catAndMouse(x, y, z) {
let catASum=Math.abs(x-z)
let catBSum=Math.abs(y-z)
if(catASum<catBSum){
    return "Cat A"
}else if(catBSum<catASum){
    return "Cat B"
}else{
    return "Mouse C"
}

}