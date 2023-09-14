const fs = require("fs");

fs.writeFile("messageNumber2.txt", "Hello Node1", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("messageNumber1.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
