function solution(s) {
    let result = []
    for(let i =1; i<=s.length; i++){
        let slicedArr= s.slice(0,i-1)
        let idx = slicedArr.split('').reverse().join('').indexOf(s[i-1])
   
        result.push(idx===-1?-1:idx+1)   
    }
    return result
}