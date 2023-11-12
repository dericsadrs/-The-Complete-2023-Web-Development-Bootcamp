import express from "express";
const app = express();
const port = 3002;


//GET Method 
app.get("/", (req, res) => {
      // console.log("Request: ",request.rawHeaders);
      res.send("Hello World!");
    })

//Get Method /about 
app.get("/about", (req,res) => {
    res.send(
      "<h1> About Me</h1> <p>My name is Deric </p> "
      
      );   
})

//Get Method /about 
app.get("/contact", (req,res) => {
  res.send("<h1> Contact </h1> <p>You can reach me Via: 097777777777 </p>");   
})

// once the server started, this listen to the port that is running.
app.listen(port, () => {
  console.log(`Server is running ${port}`);

})

