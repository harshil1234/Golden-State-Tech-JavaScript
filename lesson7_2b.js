/*
2. b. Write a JavaScript function (printAllColors) to display all the colors in the array that's passed into the function in order, including the subarray's colors. In the case of the example 'colors' array the output should look like this (the dashed lines are part of the output):
 
- - - - - - - - - - - - -
"#1 choice is Blue ."
"#2 choice is Green."
"#3 choice is Red."
"#4 choice is Yellow."
"#5 choice is Orange."
"#5 choice is Gold."
"#5 choice is Mustard."
"#5 choice is Violet."
"#5 choice is Indigo."
- - - - - - - - - - - - -
 Note: the functions should work with any "similar" array.
 */

 function printAllColors(colors) {
	var counter = 0;
	console.log("- - - - - - - - - - - - -");
	for (var i=0; i < colors.length; i++) {
		if (typeof(colors[i]) == "string") {
			if (counter < 5) {
				counter += 1;
			}
			console.log("#"+counter +" choice is "+colors[i]+" .");
		} else if(Array.isArray(colors[i])) {
			for (var j = 0; j < colors[i].length; j++) {
				if (counter < 5) {
			 		counter += 1;
			 	}
				console.log("#"+counter +" choice is "+colors[i][j]+" .");
			} 
		} else {
			continue;
		}
	}
	console.log("- - - - - - - - - - - - -");
}

printAllColors(["Blue", "Green", "Red", ["Yellow","Orange","Gold","Mustard"], "Violet", "Indigo"])
printAllColors(["Blue", 55, "Red", ["Yellow","Orange","Gold","Mustard"], "Violet", "Indigo"])
printAllColors(["Blue", "Green", "Red", ["Yellow","Orange","Gold","Mustard"], "Violet", undefined])
printAllColors(["Blue", "Green", "Red", ["Yellow","Orange","Gold","Mustard"], "Violet", ["Maroon", "Indigo", "White"]])