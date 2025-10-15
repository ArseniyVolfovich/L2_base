function primeFactors(n){
let result= ""
let p =2
while (n>1){
  let count = 0
  while (n%p === 0){
    n = n/p
    count ++
  }
  if(count >0){
    if(count ===1){
      result += "("+p+")"
    }else{
      result += "("+p+"**"+count + ")"
    }
  }
  p++
  }
  return result
  }