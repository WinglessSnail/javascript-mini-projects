//digit counter
var num = Number(prompt("Enter a number: ", 0))
 count=0
while(num>0){
    num=Math.floor(num/10)
    count++
}
alert(count)