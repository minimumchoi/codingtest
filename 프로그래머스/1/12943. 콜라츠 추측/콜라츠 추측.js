function solution(num) {
    let i = 0
   while(num!==1){
       if(num%2===0){
           num = num/2
           i++
       }
       else{
           num = (num*3)+1
           i++
       }
   }
    return i<=500?i:-1
}