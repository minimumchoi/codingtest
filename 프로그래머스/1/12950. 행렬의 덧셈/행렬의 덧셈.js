function solution(arr1, arr2) {
    let array = []
    for(let i = 0; i<arr1.length; i++){
        let arr = []
        for(let t = 0; t<arr1[i].length;t++){
            arr.push(arr1[i][t]+arr2[i][t])
        }
        array.push(arr)
    }
    return array
}