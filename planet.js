function init()
{
	var planet = document.getElementById("greenplanet");
	if (planet != null)
	{
		planet.innerHTML = "Red Alert: hit by phaser fire!";
		planet.setAttribute("class", "redtext");
	}
	else
	{
		console.log("Uh oh, something went wrong.");
		console.log("The 'planet' variable is null.");
	}
}

window.onload = init();