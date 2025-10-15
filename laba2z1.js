function hasTwoCubeSums(n){
  const map=new Map();
  const limit=Math.floor(Math.cbrt(n));
  for(let a =0;a<=limit;a++){
    const a3 = a**3;
    if(a3>n)break;
    for(let b = a; b<=limit;b++){
      const s =a3+b**3;
      if(s>n)break;
      if(s===n){
        if(map.has(s)){
          return true;
        }
      }
      if(!map.has(s)){
        map.set(s,[]);
      }
      map.get(s).push([a,b]);
    }
  }
  return false
}