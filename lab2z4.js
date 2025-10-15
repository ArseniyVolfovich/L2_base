function findMissing(list) { 
  let n=list.length;
  let d=(list[n-1]-list[0])/n;
  for(let i=0;i<n-1;i++){
    if(list[i+1]-list[i]!=d){
      return list[i]+d;
    }
  }
  return list[0];
}