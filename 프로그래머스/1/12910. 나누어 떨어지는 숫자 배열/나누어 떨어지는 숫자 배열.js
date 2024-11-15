function solution(arr, divisor) {
    let array = arr.filter((r)=>r%divisor===0)
    if(array.length){
        array.sort((a,b)=>a-b)
    }
    else{
        array = [-1]
    }
    return array
}