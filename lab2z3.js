function whatCentury(year){
  let years = Number(year)
  let cent=year/100
  if(years % 100 !=0){
    cent = Math.floor(cent)+1
  }else{
    cent=Math.floor(cent)
  }
  let ending= 'th'
  let lasttwo = cent % 100
  if(lasttwo != 11 && lasttwo!= 12 && lasttwo !=13){
    let last = cent % 10
    if(last == 1){
      ending ='st'
    }else if (last==2){
      ending ='nd'
    }else if(last==3){
      ending = 'rd'
    }
  }
  return cent + ending
}