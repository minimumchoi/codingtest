function solution(s) {
    let split =  s.split(" ")
    let answerArr =""
    for(let i = 0; i<split.length; i++){
        
        for(let j=0; j<split[i].length; j++){
            if(j%2===0){
           answerArr+=split[i][j].toUpperCase()
        }
        else{
            answerArr+=split[i][j].toLowerCase()
        }
           
        } 
        if(i<split.length-1){
            answerArr+=" "
        }
        
    }
 
    return answerArr
}