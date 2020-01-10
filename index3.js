// Declare all variables
var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
// CYCLE: bye ship will not be sunk
while (isSunk == false) { 
guess = prompt("Ready, aim, fire! (enter a number 0-6):");

if (guess < 0 || guess > 6) {
 alert("Please enter a valid cell number!");
 } 
 else {
 guesses = guesses + 1;// add one to the number of shots
 if (guess == location1 || guess == location2 || guess == location3) {  //if the shot hit the ship
   hits = hits + 1;//ADD ONE to the number of hits
   if (hits == 3) { // IF quantity hits equal to three
    isSunk = true; //ASSIGN isSunk true
alert("You sank my battleship!"); // display a message that the ship is sunk
	
        } else {alert("MISS"); // is displayed if the user did not hit

    }
  }
}
// Print result for user
var stats = "You took " + guesses + " guesses to sink the battleship, " +
 "which means your shooting accuracy was " + (3/guesses);
alert(stats);// commit
