function solution(a, b) {
    return a.map((r,idx)=>r*b[idx]).reduce((acc,cur)=>acc+cur)

}