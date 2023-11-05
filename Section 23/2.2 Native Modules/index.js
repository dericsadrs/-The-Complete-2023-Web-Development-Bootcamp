const fs = require('fs');


// fs.writeFile("message.txt", "Hello, world!",
// (err) => {
//     if(err) throw err;
//     else console.log("The file has been successfully written");
// }
// );

fs.readFile("./message.txt","utf-8",(err, data) => {
    if (err) throw err;
    else {
        console.log(data);
    }
})