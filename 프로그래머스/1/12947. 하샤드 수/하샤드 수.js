function solution(x) {
    let sum = (x+"").split("").reduce((acc,cur)=>acc+(cur*1),0)
    return x%sum===0
}