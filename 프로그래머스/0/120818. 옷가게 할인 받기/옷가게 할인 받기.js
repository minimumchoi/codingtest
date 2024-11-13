function solution(price){
    const sale = price>=500000 ? 20 : price>=300000 ? 10 : price>=100000 ? 5:0 
    return parseInt(price*(100-sale)/100)
}

