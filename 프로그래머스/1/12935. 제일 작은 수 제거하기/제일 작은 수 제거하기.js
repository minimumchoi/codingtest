function solution(arr) {
    let result = []
   if(arr.length === 1)
        result.push(-1)
    else{
       result = arr.filter((num)=>num!==Math.min(...arr))
    }
    return result
}