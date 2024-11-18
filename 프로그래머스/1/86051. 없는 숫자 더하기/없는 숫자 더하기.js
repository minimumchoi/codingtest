function solution(numbers) {
    const allNumebers= [0,1,2,3,4,5,6,7,8,9]
    const numberArray = allNumebers.map((num)=>numbers.includes(num)?null:num)
    return numberArray.reduce((acc,cur)=>acc+cur)
}