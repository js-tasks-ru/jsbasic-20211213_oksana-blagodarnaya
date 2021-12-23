function filterRange(arr, a, b) {
  let newArr = [];
  
  arr.find( (el) => {
    if(el >= a  && el <= b){
      newArr.push(el);
    }
  });
   
  return newArr;
}
