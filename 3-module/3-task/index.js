function camelize(str) {
  let newArr = [];
  let arrWithoutDash = str.split("-");
    
 for (let i = 1; i < arrWithoutDash.length; i++) {
    let firstLetter = arrWithoutDash[i].slice(0, 1).toUpperCase();
    let strWithout1letter = arrWithoutDash[i].slice(1);
    let newWord = firstLetter + strWithout1letter;
    newArr.push(newWord);
  }
  
  newArr.unshift(arrWithoutDash[0]);
  let newStr = newArr.join("");
     
  return newStr; 
}
