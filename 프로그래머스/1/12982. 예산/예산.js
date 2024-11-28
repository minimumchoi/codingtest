function solution(d, budget) {
    let arr = d.sort((a,b)=>a-b)
    let sum = 0
    let count = 0
    for(let i=0; i<d.length; i++){
         if (sum + arr[i] > budget) break;
    
        sum+=arr[i]
        count+=1
        
    }
    return count
}