function clunk(times) // calls display() for "Clunk!" the given number of times
{
	var num = times;
	while (num > 0)
	{
		display("Clunk! ");
		num = num - 1;
	}
}

function thingamajig(size) // calls display() for "Clank!" once if the given argument is 0, "Thunk!" once if it is 1, and "Clunk!" the factorial of any other given number
{
	var facky = 1;
	clunkCounter = 0; // reset the clunkCounter after the last iteration
	if (size == 0)
	{
		display("Clank! ");
	}
	else if (size == 1)
	{
		display("Thunk! ");
	}
	else
	{
		while (size > 1) // get the factorial of the argument if it is not 0 or 1, stored in facky variable
		{
			facky = facky * size; // multiply facky by the current size
			size = size - 1; // reduce the size by one for the next iteration, until size is one and facky contains the factorial of the initial size 
		}
		clunk(facky);
	}
}

function display(output) // print the given argument to the console and document, then increment clunkCounter by one
{
	console.log(output);
	document.write(output);
	clunkCounter = clunkCounter + 1;
}

var clunkCounter = 0; // initialize the clunkCounter variable
for(var i = 0; i <= 7; i++) // call thingamajig for 0-7
{
	thingamajig(i); // call thingamjig() for this iteration
	console.log(clunkCounter); // print clunkCounter to the console after this iteration's thingamajig() has run
	document.write(clunkCounter + "<br>"); // print clunkCounter to the document too
}