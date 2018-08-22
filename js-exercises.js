//CHAPTER 2

//Triangle solution (mine)

var x = "";
for (i = 0; i < 7; i++) {
  x += "#";
  console.log(x);
};


//Triangle solution (book)

for (var line = "#"; line.length < 8; line += "#") {
  console.log(line);
};

//FizzBuzz solution (mine)

for (var number=1; number <= 100; number++) {
  if (number % 15 === 0) {
  	console.log("FizzBuzz");
  } else if (number % 5 === 0) {
  	console.log("Buzz");
  } else if (number % 3 === 0) {
  	console.log("Fizz");
  } else {
    console.log(number);
  }
};

//FizzBuzz solution (book)

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n); // empty string returns false. "False" or n (which is "true") returns "true" (which is n in this case).
}


//Chess Board solution (mine)

var size = 8; // size can be changed
var a = "#";
var b = "_";
for (var i = 0; i < size; i++) {
  if(i%2 == 0 && size%2 == 0) {
    console.log((a + b).repeat(size/2));
  }
  if(i%2 !== 0 && size%2 == 0) {
    console.log((b + a).repeat(size/2));
  }
  if(i%2 == 0 && size%2 !== 0) {
    console.log((a + b).repeat(size/2) + a);
  }
  if(i%2 !== 0 && size%2 !== 0) {
    console.log((b + a).repeat(size/2) + b);
  }
}

//Chess Board solution (book)

var size = 8;
var board = "";
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

// ---------------------------------------


// CHAPTER 3

// Minimum (mine)...book offers the same code

function min(a, b) {
  if(a > b) {
    return b;
  } else {
    return a;
  }
}

console.log(min(3, 7));
// 3;
console.log(min(-10; 1));
// -10;


// Define a recursive function isEven

function isEven(number) {
  if(number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else if (number < 1) {
    return false;
  } else {
    return isEven(number - 2)
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


// Bean Counting

function countChar (string, char) {
  	var count = 0;
  	for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) == char) {
      	count += 1;
      }
    }
  	return count;
}

function countBs (string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

// ----------------------------------------


// CHAPTER 4

// The Sum of a Range

function range(start, end) { // Initial range function
  var numbersArr = [];
  for (var number = start; number <= end; number ++) {
    numbersArr.push(number);
  }
  return numbersArr;
}

console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(numbersArray) {
  var numbersSum = 0;
  for (var i = 0; i <= numbersArray.length - 1; i++) {
    numbersSum += numbersArray[i];
  }
  return numbersSum;
}

console.log(sum(range(1, 10))); // 55;

function rangeModified(start, end, step) { // Modified range function
  var numbersArr = [];
  if (step > 0) {
  	 for (var number = start; number <= end; number += step) {
     numbersArr.push(number);
  	}
  } else if (step < 0) {
  	for (var number = start; number >= end; number += step) {
    numbersArr.push(number);
    }
  } else {
  	for (var number = start; number <= end; number ++) {
    numbersArr.push(number);
  	}
  }
  // book offers a simpler solution for initial if statement:
  //if (step == null) step = 1;
  return numbersArr;
}
console.log(rangeModified(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rangeModified(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(rangeModified(5, 2, -1)); // [5, 4, 3, 2]

// -------------------------------------------------------------


//Reversing an Array

function reverseArray(arr) {
  var newArr = [];
  for( var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverseArray('A', 'B', 'C')); // ["C", "B", "A"]


function reverseArrayInPlace(arrayValue) {
	for (var i = 0; i < Math.floor(arrayValue.length / 2); i++) {
    var original = arrayValue[i];
    arrayValue[i] = arrayValue[arrayValue.length - 1 - i];
    arrayValue[arrayValue.length - 1 - i] = original;
  }
  return arrayValue;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // [5, 4, 3, 2, 1];


// ---------------------------------------------------------

// A List

function arrayToList(arr) {
  var list = null;
  for (var i=arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list}
  }
  return list;
}

console.log(arrayToList([10, 20]));
// {value: 10, rest:{ value: 20, rest: null}}

function listToArray(list) {
  var arr = [];
  for (var node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// [10, 20, 30]

function prepend(element, list) {
  return list = {
    value: element,
    rest: list
  };
}

console.log(prepend(10, prepend(20, null)));
// {value: 10, rest: {value: 20, rest: null}}

function nth(list, position) {
  if (!list) {
    return undefined;
  } else if (n == 0) {
    return list.value;
  } else {
    return nth(list.rest, position - 1);
  }
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// 20
