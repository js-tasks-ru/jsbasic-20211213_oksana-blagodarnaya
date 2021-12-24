function namify(users) {
  let usersName = [];
  
  users.forEach(function(item) {
    usersName.push(item.name); 
  });
  
  return usersName;
}
