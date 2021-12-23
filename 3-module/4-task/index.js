function showSalary(users, age) {
  let arrNameSalary = [];
  
  users.forEach( (el) => {
    
    let userName = el.name;
    let userAge = el.age;
    let userSalary = el.balance;
    let strNameAge = userName + ', ' + userSalary;
    
    if(userAge <= age){
      arrNameSalary.push(strNameAge);
    }
    
  });
   
  let res = arrNameSalary.join("\n");
  return res;
}
