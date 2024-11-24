function solution(food) {
    let arr = []
    for(let i = 1; i<food.length; i++){
        if(food[i]>1){
            for(let j= 0; j<parseInt(food[i]/2); j++){
                arr.push(i)
            }
        }
    }
    let result = [...arr,0,...arr.reverse()].join("")
    return result
}