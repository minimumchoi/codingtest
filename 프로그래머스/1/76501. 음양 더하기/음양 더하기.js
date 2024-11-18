function solution(absolutes, signs) {
    let result = 0
    for(let i = 0; i<absolutes.length; i++){
        let sign = (signs[i]?1:-1)
        result+=sign*absolutes[i]
    }
 return result
}