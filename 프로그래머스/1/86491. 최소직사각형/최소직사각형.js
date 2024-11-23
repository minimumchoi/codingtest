function solution(sizes) {
    let sortedArray = []
    sortedArray = sizes.map((r)=>r.sort((a,b)=>b-a))
    let max = sortedArray.map((r)=>r[0])
    let min = sortedArray.map((r)=>r[1])
    let result = Math.max(...max)*Math.max(...min)
    return result
}