var fiat =
{
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	fuel: 0,
	started: false,
	start: function()
	{
		if (this.fuel == 0)
		{
			alert("The car is on empty, fill up before starting!");
		}
		else
		{
			alert("The car has started!");
			this.started = true;
		}
	},
	stop: function()
	{
		alert("The car has stopped!");
		this.started = false;
	},
	drive: function()
	{
		if (this.started)
		{
			if (this.fuel > 0)
			{
				alert(this.make + " " + this.model + " is driving!");
				this.fuel--;
			}
			else
			{
				alert("Uh oh, out of fuel.");
				this.stop();
			}
		}
		else
		{
			alert("You need to start the engine first.");
		}
	},
	addFuel: function(amount)
	{
		alert(amount + " fuel added.");
		this.fuel = this.fuel + amount;
	}
};

fiat.drive();
fiat.start();
fiat.addFuel(3);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();