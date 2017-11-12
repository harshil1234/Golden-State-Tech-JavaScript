//Write a function that takes in a number (num) and returns the string "positive number" if the number is positive, and "negative number" if the number is negative.

function numSign(number) {
	if (number >= 0) {
		console.log("positive number");
	} else {
		console.log("negative number");
	}
}

numSign(-1)
numSign(100)
numSign(-5)