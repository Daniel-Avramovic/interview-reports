export const filterUser = (users, val) => {

   return users.filter(user => {
    if(val === ""){
      return user
    }else if(user.name.first.toLowerCase().includes(val.toLowerCase())){
      return user
    }else{
      return false;
    }
  })
}