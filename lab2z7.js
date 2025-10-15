function wave(str){
let result =[]
for(let i=0;i<str.length;i++){
  let char = str[i]
  if(char !== ' '){
    let waveStr = ""
    for(let j=0;j<str.length;j++){
      if(i===j){
        waveStr += str[j].toUpperCase()
      }else{
        waveStr += str[j]
      }
    }
    result.push(waveStr)
  }
}
  return result
}