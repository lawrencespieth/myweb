var view =
{
	displayMessage: function(msg)
	{
		document.getElementById("messageArea").innerHTML = msg;
	},
	displayHit: function(location)
	{
		document.getElementById(location).setAttribute("class", "hit");
	},
	displayMiss: function(location)
	{
		document.getElementById(location).setAttribute("class", "miss");
	}
};

var model =
{
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	ships:
	[
		{locations: [0, 0, 0], hits: ["", "", ""]},
		{locations: [0, 0, 0], hits: ["", "", ""]},
		{locations: [0, 0, 0], hits: ["", "", ""]}
	],
	generateShip: function()
	{
		var direction = Math.floor(Math.random() * 2);
		var row, col;
		if (direction === 1)
		{
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		}
		else
		{
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * this.boardSize);
		}
		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++)
		{
			if (direction === 1)
			{
				newShipLocations.push(row + "" + (col + i));
			}
			else
			{
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},
	generateShipLocations: function()
	{
		var locations;
		for (var i = 0; i < this.numShips; i++)
		{
			do
			{
				locations = this.generateShip();
			} while (this.collision(locations));
		this.ships[i].locations = locations;
		}
	},
	collision: function(locations)
	{
		for (var i = 0; i < this.numShips; i++)
		{
			var ship = model.ships[i];
			for (var j = 0; j < locations.length; j++)
			{
				if (ship.locations.indexOf(locations[j]) >= 0)
				{
					return true;
				}
			}
		}
		return false;
	},
	fire: function(guess)
	{
		for (var i = 0; i < this.numShips; i++)
		{
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);
			if (index >= 0)
			{
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("Hit!");
				if (this.isSunk(ship))
				{
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("Miss!");
		return false;
	},
	isSunk: function(ship)
	{
		for (var i = 0; i < this.shipLength; i++)
		{
			if (ship.hits[i] !== "hit")
			{
				return false;
			}
		}
		return true;
	}
};

var controller =
{
	guesses: 0,
	processGuess: function(guess)
	{
		var location = parseGuess(guess);
		if (location)
		{
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips)
			{
				view.displayMessage("You sank all the battleships in " + this.guesses + " guesses");
			}
		}
	}
};

function parseGuess(guess)
{
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
	if (guess === null || guess.length !== 2)
	{
		alert("Oops, please enter a letter and a number on the board.");
	}
	else
	{
		var row = alphabet.indexOf(guess.charAt(0));
		var column = guess.charAt(1);
		if (isNaN(row) || isNaN(column))
		{
			alert("That's not a valid board position.");
		}
		else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize)
		{
			alert("That position is off the board.");
		}
		else
		{
			return row + column;
		}
	}
	return null;
}

function handleFireButton()
{
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;
	controller.processGuess(guess);
	guessInput.value = "";
}

function handleKeyPress(e)
{
	var fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13)
	{
		fireButton.click();
		return false;
	}
}

function init()
{
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;
	model.generateShipLocations();
}

window.onload = init;