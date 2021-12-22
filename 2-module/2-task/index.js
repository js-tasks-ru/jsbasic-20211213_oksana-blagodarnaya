function isEmpty(obj) {
  let count = 0;
  
  for (let key in obj){
    count++;
  }
  if(count > 0){
    return false
  } else {
    return true;
  }
}
