function solution(str){
  let result = []
  let i =0
  let current1, current2
  let pair
  while(i<str.length){
    current1 = str[i]
    i++
    if(i<str.length){
      current2 = str[i]
      i++
    }else{
      current2 = "_"
    }
    pair = ""
    pair += current1
    pair += current2
      result.push(pair)
  }
  return result
  }