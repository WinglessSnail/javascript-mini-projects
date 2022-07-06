var usersData =[
    {id: 1, name: "john", password: "3556854", email:"john@gmail.com"},
    {id: 2, name: "julie", password: "4114423", email:"julie@gmail.com"},
    {id: 3, name: "jill", password: "234279", email:"jill@gmail.com"},
    {id: 4, name: "jack", password: "235488", email:"jack@gmail.com"},
]
var userName = prompt("Enter your name");
var mainData = usersData.find(function(user){
    return user.name === userName;
})
if(mainData=== undefined){
    alert("you're not registered")}
var confirmemail = prompt("Enter your email")
if(confirmemail === mainData.email){
    alert("your password : "+ mainData.password)
}
else{alert("email doesn't match")}