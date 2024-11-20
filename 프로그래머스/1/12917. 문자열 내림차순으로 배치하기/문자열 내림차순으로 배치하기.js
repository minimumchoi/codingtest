function solution(s) {
    let array = [...s]
    let string = array.sort().reverse().join("")
    return string
}