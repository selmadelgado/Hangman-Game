var words = ['iPhoneX', 'MacBook Air', 'Apple' 'Cupertino'];
var magicWord = " ";
var wins = 0;
var losses = 0;
var guessesLeft = 5;


function pickWord() {
	var randomNumber = //Math.floor and Math.random.  Make random number based on length of words array.
	var word = words[randomNumber];

	return word;
}


// Create a function that sets up the game - 
function setUpGame() {
	var underscores;
	var currentWord = word;

	for (var i = 0; i < currentWord.length; i++) {
		underscores += '_ '; // Concatinates underscores together

	}

	//underscores = '_ _ _ '


	document.getElementById('magicWord').innerText = underscores;
}

function checkUserGuess(guessedLetter) {

	// if currentWord includes the guessedLetter
	// then change '_' to that letter

}


// Key Events - to listen for when the user hits a key on the keyboard.  This drives the whole game.

document.onkeyup = function(event) {

	checkUserGuess(event.key);


}

setUpGame();