for(var bottles = 99; bottles > 0; bottles--)
{
	if (bottles != 1)
	{
		document.write(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer!<br>");
		console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer!<br>");
 	}
	else
	{
		document.write(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer!<br>");
		console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer!<br>");
 	}
}
document.write("No more bottles of beer on the wall!");
console.log("No more bottles of beer on the wall!!");