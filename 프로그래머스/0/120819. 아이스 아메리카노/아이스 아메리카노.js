function solution(money){
    const array = []
    array.push(parseInt(money/5500))
    array.push(money%5500)
    return array 
}