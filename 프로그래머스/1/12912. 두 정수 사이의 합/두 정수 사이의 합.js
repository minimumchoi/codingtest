function solution(a, b) {
    let num = 0 
    if(a<b){
         for(let i = a ; i<=b; i++){
             num += i
         }
    }
    
    else{
        for(let i = b ; i<=a; i++){
             num += i
         }
    }
    return num
 
}