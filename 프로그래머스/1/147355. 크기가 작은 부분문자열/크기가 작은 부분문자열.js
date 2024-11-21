function solution(t, p) {
    let arr = []
    for(let i = 0; i<=(t.length-p.length); i++){
       if(t.slice(i,i+p.length)<=p){
           arr.push(t.slice(i,i+p.length))
       }
    }
  return arr.length
}