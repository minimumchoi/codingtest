function solution(n)
{
    let arr = n.toString().split("")
    if(arr.length>1){
        return arr.reduce((acc,cur)=>(acc*1)+(cur*1))
    }
    else
       return arr*1
   
}