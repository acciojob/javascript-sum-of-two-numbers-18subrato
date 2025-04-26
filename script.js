let input1 = prompt("Enter the first number:"
let input2 = prompt("Enter the second number:");

let input1 = Number(input1);
let input2 = Number(input2);
if(typeof input1 === 'NAN'){
	alert('Invalid input. Please enter a valid number.')
} else if(typeof input2 === 'NAN'){
	alert('Invalid input. Please enter a valid number.')
} else {
	alert(`The sum of ${input1} and ${input2} is ${input1+input2}`)
}
