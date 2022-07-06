//average of n numbers
let userNumbers = []  

let userNumber = 0
let sum = 0

while (userNumber != -1) {
	userNumber = Number(prompt('Enter the number: \n enter -1 if you dont enter any number'))
	if (userNumber != -1) {
		userNumbers.push(userNumber)
	}
}

for (let i = 0 ; i < userNumbers.length ; i++) {
	sum += userNumbers[i]
}

console.log(userNumbers)
console.log("Average: ", sum / userNumbers.length)