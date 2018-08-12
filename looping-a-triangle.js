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


//Chess Board
var size = 8;
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


