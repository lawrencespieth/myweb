for(var bottles = 99; bottles > 0; bottles--)
{
	if (bottles != 1)
	{
		document.write(bottles + " bottles of pop on the wall, " + bottles + " bottles of pop!<br>");
		console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of pop!<br>");
 	}
	else
	{
		document.write(bottles + " bottle of pop on the wall, " + bottles + " bottle of pop!<br>");
		console.log(bottles + " bottle of pop on the wall, " + bottles + " bottle of pop!<br>");
 	}
}
document.write("No more bottles of pop on the wall!");
console.log("No more bottles of pop on the wall!!");