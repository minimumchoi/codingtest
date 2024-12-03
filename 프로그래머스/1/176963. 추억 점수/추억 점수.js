function solution(name, yearning, photo) {
    let hash = new Map();
    let result = []
    
    name.forEach((name,idx)=>hash.set(name,yearning[idx]))
    
    
    for(let i = 0; i<photo.length; i++){
        let answer = 0
        for(let j=0; j<photo[i].length; j++){
           let person =   hash.get(photo[i][j])
           answer+=person!==undefined?person:0
        }
    result.push(answer)
    }
    return result 
}