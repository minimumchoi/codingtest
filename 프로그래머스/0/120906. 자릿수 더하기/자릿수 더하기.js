function solution(n){
    const string = String(n)
    const newArray =  Array.from(string).map((num)=>Number(num))
    
    return newArray.reduce((acc,cur)=>acc+cur)
    
}