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
