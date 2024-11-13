function solution(array){
    const center = parseInt((array.length)/2)
    const newArray =  array.sort((a,b)=>a-b)
    return newArray[center]
}