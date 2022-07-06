var users = [
    {id: 1, name: 'james', family: 'trribiani', age: 21, email: 'ce0101010@gmail.com'},
    {id: 2, name: 'john', family: 'kapnumb', age: 19, email: 'ce10101@gmail.com'},
    {id: 3, name: 'alex', family: 'akers', age: 30, email: 'ce10001011@gmail.com'},
  ]
  
  var userName = prompt('Enter Your Name: ')
  var userFamily = prompt('Enter Your Family: ')
  var userAge = prompt('Enter Your Age: ')
  var userEmail = prompt('Enter Your Email: ')
  
  if (userName.length < 3 || userName.length > 10) {
    alert("name must be between 3 and 10 characters")
  } else if (userFamily.length < 3 || userFamily.length > 15) {
    alert("family must be between 3 and 15 characters")
  } else if (isNaN(userAge) || userAge.length > 3) {
    alert("age must be a number and less than 3 characters")
  } else {
    var newUser = {
      id: 4,
      name: userName,
      family: userFamily,
      age: userAge,
      email: userEmail
    }
    users.push(newUser)
    
    console.log(users)
}