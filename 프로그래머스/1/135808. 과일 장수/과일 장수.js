function solution(k, m, score) {
    let arr = []
    let sortedArr = score.sort((a,b)=>b-a)
    let result = 0
    for(let i = 1; i<parseInt(score.length/m+1); i++){
        arr.push(sortedArr.slice((i*m)-m,i*m))
    }
    for(let i = 0; i<arr.length; i++){
        result += Math.min(...arr[i])*m
    }
    
    return result 

}