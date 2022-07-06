//one way
var num=prompt("enter number:",0)
var total=0
for(var i=0;i<num.length;i++){
    total=total+Number(num[i])
    
}
alert(total) 
//----------------------------------------------------------------------------------//
//another way
var num = Number(prompt("Enter a number:", 0))
sumdigits = 0;  
while(true){
    sumdigits +=num%10
    num=Math.floor(num/10)
    if(num==0){
        break
    }   

}alert(sumdigits)