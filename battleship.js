var location1 = Math.floor(Math.random() * 5);;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (!isSunk)
{
	guess = prompt("Ready, aim, fire! (Enter a number 0-6):"); 
	if (guess >= 0 && guess <= 6)
	{
		guesses++;
		if (guess == location1 || guess == location2 || guess == location3)
		{
			alert("Hit!");
			hits++;
			if (hits == 3)
			{
				isSunk = true;
				alert("You sunk the battleship!");
			}
		}
		else
		{
			alert("Miss!");
		}
	}
	else
	{
		alert("Please enter a number from 0 to 6.");
	}
}
var stats = "You took " + guesses + " guesses to sink the battleship, at " + (3/guesses*100) + "% accuracy.";
alert(stats);