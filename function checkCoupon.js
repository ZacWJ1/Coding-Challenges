function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let current= new Date(currentDate)
    let exp= new Date(expirationDate)
     return (enteredCode===correctCode) && (exp>=current)
     }