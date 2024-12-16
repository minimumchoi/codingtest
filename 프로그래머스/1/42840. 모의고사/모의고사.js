function solution(answers) {
    let result = []
    let a = [1, 2, 3, 4, 5]
    let b = [2, 1, 2, 3, 2, 4, 2, 5]
    let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let ac = answers.filter((r,idx)=>r===a[idx%a.length]).length
    let bc = answers.filter((r,idx)=>r===b[idx%b.length]).length
    let cc = answers.filter((r,idx)=>r===c[idx%c.length]).length
    
    let max = Math.max(ac,bc,cc)
    
    if(max===ac)result.push(1)
    if(max===bc)result.push(2)
    if(max===cc)result.push(3)
    
    return result
}