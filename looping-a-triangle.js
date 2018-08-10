//Triangle solution A

var x = "";
for (i = 0; i < 7; i++) {
  x += "#";
  console.log(x);
};


//Triangle solution B (book)

for (var line = "#"; line.length < 8; line += "#") {
  console.log(line);
};

//FizzBuzz solution

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



