function solution(n){
    let arr = 0
    for(let i=0; i<=n; i++){
        n%i===0?arr+=i:arr
    }
    return arr
}