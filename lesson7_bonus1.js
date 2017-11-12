//1. Write a function that returns only the odd numbers from an array of integers.

function isOddNum(num) {
    var return_array = []
	//check its not null and array
	if (!num || !Array.isArray(num)) {
	    console.log("Invalid input passed, only accepts arrays");
	    return return_array;
	}
	for (var i=0; i<num.length; i++) {
	    if (num[i] % 2 != 0) {
	        return_array.push(num[i]);
	    }
	}
	return return_array
}

isOddNum([4, 6, 7, 3, 9, 656, -123])
isOddNum(undefined)
isOddNum([1, 2])