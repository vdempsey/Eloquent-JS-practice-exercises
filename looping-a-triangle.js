//solution A

var x = "";
for (i = 0; i < 7; i++) {
  x += "#";
  console.log(x);
};


//solution B (book)

for (var line = "#"; line.length < 8; line += "#") {
  console.log(line);
};
