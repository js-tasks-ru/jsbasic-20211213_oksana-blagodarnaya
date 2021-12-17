function truncate(str, maxlength) {
  let newString = '';
   
    if(str.length > maxlength) {
      newString = str.slice(0, maxlength - 1) + "…";
    } else {
     newString = str;
    }

  return newString;
}
