function solution(k, score) {
    let lowestNum = []
    let newArr = []
    for(let i = 0; i<score.length; i++){
        if(i<k){
            newArr = score.slice(0,i+1)
            lowestNum.push(Math.min(...newArr))
      
        }
     else{
        newArr = score.slice(0,i+1)
        newArr = newArr.sort((a, b) => b - a).slice(0, k);
        lowestNum.push(Math.min(...newArr))
      
     }

    }
 return lowestNum
}