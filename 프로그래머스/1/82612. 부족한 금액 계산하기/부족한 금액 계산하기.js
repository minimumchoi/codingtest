function solution(price, money, count) {
    let finalPrice = 0 
     for(let i = 1; i<=count; i++){
         finalPrice += (price*i)
     }
    if(money>finalPrice){
        return 0
    }
    else{
        return finalPrice-money
    }
}