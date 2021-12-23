function namify(users) {
  let usersName = [];
  
  users.map(function(item) {
    usersName.push(item.name); 
  });
  
  return usersName;
}
