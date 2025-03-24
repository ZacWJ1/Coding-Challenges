function gradingStudents(grades) {
    //declare an open array
    let finalCount=[]
    let gradeCount=grades.length
     // iterate through the array
     for(let i=0;i<gradeCount;i++){
         //need an if/then statement to add ,or leave alone grade
     if(grades[i]<38){//need to make sure to read the instructions more
         finalCount.push(grades[i])
     }
       else if(grades[i]%5>=3){//need to make sure to use array[i] for checks
         let addition=5-( grades[i]%5)
         grades[i]+= addition
         finalCount.push(grades[i])
       }else if(grades[i]%5<3){
         
         finalCount.push(grades[i])
       }  
       
     }
     
 return(finalCount)
 }