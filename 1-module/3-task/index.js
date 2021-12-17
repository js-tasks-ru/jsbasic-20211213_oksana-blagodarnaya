function ucFirst(str, maxlength) {
  let firstLetter = str.slice(0, 1);
  let strWithout1l = str.slice(1);
  let newStr = firstLetter.toUpperCase() + strWithout1l;
  
  return newStr;
}
