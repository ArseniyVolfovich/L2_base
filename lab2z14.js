function isCircleSorted(arr){
  if(arr.length<=1)return true;
  var countBreaks = 0;
  for(let i=0;i<arr.length;i++){
    var current = arr[i];
    var next = arr[(i+1) % arr.length];
    if(current>next) countBreaks++;
    if(countBreaks >1)return false;
  }
  return true;
}