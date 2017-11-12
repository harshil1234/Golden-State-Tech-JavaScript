/*
4. Write a function that takes in an array of integers and returns an array that contains the values*2.
   if Input is [2,3,6,7], output should be [4,6,12,14]
*/

function mulByTwo(nums) {
	var returnArray = []
	//check its not null and array
	if (!nums || !Array.isArray(nums)) {
	    console.log("Invalid input passed, only accepts arrays")
	    return returnArray;
	}
	for (var i = 0; i<nums.length; i++) {
	  returnArray.push(nums[i] * 2)
	}
	return returnArray
}

mulByTwo([2,3,6,7])
mulByTwo([122, 98,-6,0])
mulByTwo(undefined)
