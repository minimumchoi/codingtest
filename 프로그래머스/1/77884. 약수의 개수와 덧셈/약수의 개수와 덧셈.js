function solution(left, right) {
    
    let result = 0
    
  for(let num=left; num<=right; num++){
      
        let arr = []  
  for(let i = 1; i<=num; i++ ){    
     if(num%i===0){
              arr.push(i)
     }
  
  }
      let sign = arr.length%2===0?1:-1
     result+=(sign*num )
      
}  

return result
    
}