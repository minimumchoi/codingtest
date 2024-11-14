function solution(rsp){
  const numArray = rsp.split("").map((string)=>string*1)
  const winArray = numArray.map((num)=>num===0? 5:num===2? 0:num===5? 2:null)
  return winArray.join("")
}