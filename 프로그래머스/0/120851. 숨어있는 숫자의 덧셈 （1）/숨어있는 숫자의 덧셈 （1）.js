function solution(my_string){
   const numArray =  my_string.split("").filter((r)=>r*1>0)
    return numArray.reduce((acc,cur)=>(acc*1)+(cur*1))
}