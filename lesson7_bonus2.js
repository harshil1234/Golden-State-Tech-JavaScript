//2. Write a function that returns only those numbers from an array of integers that can be divided by 5.

function isDivBy5(num) {
	var return_array = []
	//check its not null and array
	if (!num || !Array.isArray(num)) {
	    console.log("Invalid input passed, only accepts arrays");
	    return return_array;
	}
	for (var i=0; i<num.length; i++) {
	    if (num[i] % 5 == 0) {
	        return_array.push(num[i]);
	    }
	}
	return return_array
}

isDivBy5(undefined)
isDivBy5([4, 5, 7, 3, 9, 656, -123, 450])
isDivBy5([1, 555])
