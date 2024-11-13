function solution(array,n){
    const newArray= array.filter((num)=>num===n)
    return newArray.length
}