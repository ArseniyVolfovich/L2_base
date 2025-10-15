function expandedForm(num){
  let digits=[]
  let temp=num
  while(temp>0){
    digits.push(temp % 10)
    temp = Math.floor(temp / 10)
  }
  let result = ""
  let multiplier = 1
  for(let i =0;i<digits.length;i++){
    let value = digits[i] * multiplier
    if(value !== 0 ){
      if(result === ""){
        result = value.toString()
      }else{
        result = value.toString() + " + " + result
      }
    }
    multiplier *= 10
  }
  return result
}