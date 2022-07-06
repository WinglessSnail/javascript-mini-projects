var word =prompt("enter word")
var name=[word]
var name1=name.split("")
console.log(name1)
var nameRev=name1.reverse()
console.log(nameRev)
var nameRev1=nameRev.join("")

if(nameRev1==name)
{
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}