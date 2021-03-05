

// regular function
function double(arr) {
	return arr.map(function(val) {
	  return val * 2;
	});
  }
// arrow function 
// const double = (arr) => val * 2;
const double = arr => arr.map(val => val * 2);


// regular function 
function squareAndFindEvens(numbers){
	var squares = numbers.map(function(num){
	  return num ** 2;
	});
	var evens = squares.filter(function(square){
	  return square % 2 === 0;
	});
	return evens;
  }

//   arrow function 
// const squareAndFindEvens = numbers => numbers.map((num => num ** 2) => squares.filter((square => square % 2 === 0 : 'evens'));
const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)