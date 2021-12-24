function getMinMax(str) {
  let result = {}
  let arr = [];
  let onePartOfStr = str.split(" ");
  
  onePartOfStr.forEach( (el) => {
    if(isFinite(el) === true && el !== ''){
      let num = Number(el);
      arr.push(num);
    }
  });
  
  result.min = Math.min.apply(null, arr);
  result.max = Math.max.apply(null, arr);
  
  return result;
}
