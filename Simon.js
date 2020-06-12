let computerPattern = [];
let humanPattern = [];
let numbers = [1, 2, 3, 4];
let indexCount = -1;
let lengthCount = 0;
let randomNumber;
let score = 0;
let length = 1;
let timer;
let milliseconds = 500;
let number;

function createPattern() {
	
	// Loop through the length of pattern 
	for(var i = 0; i < length; i++) {
		// Get a random number from array and store in variable 
		randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
		
		// Store random number inside string
		computerPattern += randomNumber;
		computerPattern += 0;
	}
			
	// Call method to set a timer on pattern 
	setPatternTimer();
	

	
}

function setPatternTimer() {
	
	// Call method to display the pattern to user 
	timer = setInterval(setComputerPattern, milliseconds);

}

function setComputerPattern() {
	
	// Class Variables
	var greenButton = document.getElementById("greenBtn");
	var redButton = document.getElementById("redBtn");
	var blueButton = document.getElementById("blueBtn");
	var yellowButton = document.getElementById("yellowBtn");

		
	// Increase the value of index count by one 
	indexCount += 1;
	
	// Get element from array and store in variable 
	number = computerPattern[indexCount];
	
	
	
	// Check what number to light up 
	if(number === "1") {
		greenButton.style.backgroundColor = "darkgreen";
	} else if(number === "2") {
		redButton.style.backgroundColor = "darkred";
	} else if(number === "3") {
		blueButton.style.backgroundColor = "darkblue";
	} else if(number === "4") {
		yellowButton.style.backgroundColor = "#b3b300";
	} else if(number === "0") {
		
		// Turn every buttons background color to normal
		greenButton.style.backgroundColor = "green";
		redButton.style.backgroundColor = "red";
		blueButton.style.backgroundColor = "blue";
		yellowButton.style.backgroundColor = "yellow";
	}
	
	// Check when to stop the pattern 
	if(indexCount + 1 == computerPattern.length) {
		clearInterval(timer);
	}


}

function setUserPattern(buttonNumber) {

	
	// Get the value of the number clicked and store in array 
	humanPattern += buttonNumber;
	humanPattern += 0;
	
	// Call method to check if the pattern is correct 
	checkPattern();

}

function checkPattern() {
		
	// loop through the human's pattern 
	for(var i = 0; i < humanPattern.length; i++) {
		
		// Check if pattern is growing incorrectly 
		if(humanPattern[i] != computerPattern[i]) {
			// Display to user game over 
			alert("Game Over! Your score: " + score);
			
			// Reload the page (restart game)
			location.reload();
		}
		
	}
	
	// Check if the lengths are equal 
	if(humanPattern.length == computerPattern.length) {
		
		// Increase score by one 
		score += 1;
				
		// Get a random number from array and store in variable 
		randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
		
		// Add the new number inside array 
		computerPattern += randomNumber;
		computerPattern += 0;
		
		// Set the index count back to -1
		indexCount = -1;
		
		// Recreate the array 
		humanPattern = [];
		
		// Reset the timer back to half a second 
		milliseconds = 500;
		
		// Call method to display pattern to user 
		setPatternTimer();
	}
	
}
