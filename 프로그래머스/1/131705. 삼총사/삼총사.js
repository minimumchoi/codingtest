function solution(number) {
    let arr = []
    for(let i=0; i<number.length; i++){
        for(let j=i+1; j<number.length; j++){
            for(let k=j+1; k<number.length; k++){
                arr.push(number[i]+number[j]+number[k])
            }
        }
    }
    let filteredArr = arr.filter((r)=>r===0)
    return filteredArr.length
}