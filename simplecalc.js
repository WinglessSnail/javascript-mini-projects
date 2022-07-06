var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");

var operation= prompt("Enter operation\n 1. Addition\n 2. Subtraction\n 3. Multiplication\n 4. Division\n 5. Power");
switch(operation){
    case "1":
        alert(num1+num2);
        break;
    case "2":
        if(num1>num2){
            alert(num1-num2);
        }
        else{
            alert(num2-num1);}
        break;
    case "3":
        alert(num1*num2);
        break;
    case "4":
        if(num2==0){
            alert("Division by zero is not possible");
        }
        else{
            alert(num1/num2);
        }
        break;
    case "5":
        alert(Math.pow(num1,num2));
        break;
    default:
        break;
}

