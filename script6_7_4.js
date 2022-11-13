
// function printNumber(a, b) {
	// let current = a;
	// let timerId = setInterval(function() {
		// console.log(current);
	 // if (current == b)	{
		 // clearInterval(timerId);
	 // }
	 // current ++;
	// }, 1000); 
	
// }
// printNumber(5, 15);



const printNumber = (a, b) => {
	let current = a;
	let timerId = setInterval(function() {
		console.log(current);
	 if (current == b)	{
		 clearInterval(timerId);
	 }
	 current ++;
	}, 1000); 
	
}
printNumber(5, 15);