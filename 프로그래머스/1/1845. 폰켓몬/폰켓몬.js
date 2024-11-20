function solution(nums) {
    let maxArray = nums.sort().filter((num,idx)=>num!==nums[idx+1]).length
    let nArray = nums.length/2
    return maxArray>nArray?nArray:maxArray
}

