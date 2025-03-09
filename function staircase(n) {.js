function staircase(n) {
    // Write your code here
    let space = ''
for(let i = '#'; i.length <= n; i += '#'){
    let num = 0
    while(num < n - i.length) {
        space += ' '
        num++
    }
    space += i + '\n'    
}

console.log(space)

}