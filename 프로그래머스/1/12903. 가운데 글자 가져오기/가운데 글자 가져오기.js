function solution(s) {
    let result = ""
    let half = parseInt(s.length/2)
  if(s.length%2===0){
      result = s.slice(half-1,half+1)
  }
    else{
        result = s.slice(half,half+1)
}
    return result
}