/*
 3. Write a function that takes in two arguments: a single word to search for and an array of strings. Return
                    the index number of the given word if the array contains it. Return -1 if it does not.
                    example input 1.: "apple", ["banana", "orange", "strawberry", "apple", "kiwi"]
                    in this case output should be: 3
                    example input 2.: "apple", ["banana", "orange", "strawberry", "kiwi"]
                    in this case output should be: -1
*/

function strSearch(findString, listString) {
	//check its not null and array
	if (!findString || !listString || !Array.isArray(listString)) {
	    console.log("Invalid input passed");
	    return -1
	}
	for (var i = 0; i<listString.length; i++) {
		if (findString == listString[i]) {
			return i;
		}
	}
	return -1;
}

strSearch("apple", ["banana", "orange", "strawberry", "apple", "kiwi"])
strSearch("apple", ["banana", "orange", "strawberry", "kiwi"])
strSearch("whatever", ["Hello World!", "Lorem Ipsum", "Waldo", "Train is going by", "whatever it takes"])
strSearch("whatever", ["Hello World!", "Lorem Ipsum", "Waldo", "Train is going by", "whatever"])