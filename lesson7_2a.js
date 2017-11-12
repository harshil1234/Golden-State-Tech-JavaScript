/*
2. a. Write a JavaScript function (printColors) that takes an array. The array can contain only strings or array of strings. Example array: var colors = ["Blue", "Green", "Red", ["Yellow","Orange","Gold","Mustard"], "Violet", "Indigo"];
Display all the colors in the 'colors' array in order. Console.log the items, but only if they are a string. The output should look like this:
- - - - - - - - - - - - -
"#1 choice is Blue ."
"#2 choice is Green."
"#3 choice is Red."
"#5 choice is Violet."
"#5 choice is Indigo."
- - - - - - - - - - - - -
Hint : Use a for loop to iterate through the colors array. In each loop check the type of the given item first. You can only have string or array as an item. Use the index numbers of the items to decide what number of choice to print out. Use console.log() to display text between dashed lines.
*/

function printColors(colors) {
  var counter = 0;
  console.log("- - - - - - - - - - - - -");
	for (var i=0; i < colors.length; i++) {
		if (typeof(colors[i]) == "string") {
		  counter += 1;
			console.log("#"+counter +" choice is "+colors[i]+" .");
		} else if(Array.isArray(colors[i])) {
			for (var j = 0; j < colors[i].length; j++) {
			  counter += 1;
				console.log("#"+counter +" choice is "+colors[i][j]+" .");
			} 
		} else {
			continue;
		}
	}
	console.log("- - - - - - - - - - - - -");
}

printColors(["Blue", "Green", "Red", ["Yellow","Orange","Gold","Mustard"], "Violet", "Indigo"])
printColors(["Blue", 55, "Red", ["Yellow","Orange","Gold","Mustard"], "Violet", "Indigo"])
printColors(["Blue", "Green", "Red", ["Yellow","Orange","Gold","Mustard"], "Violet", undefined])
printColors(["Blue", "Green", "Red", ["Yellow","Orange","Gold","Mustard"], "Violet", ["Maroon", "Indigo", "White"]])
