import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import nodemon from "nodemon";

const app = express()
const port = 3001

/*
This line is telling Express to serve static files from the "public" directory. 
Static files can include things like stylesheets, images, JavaScript files, etc. 
Any file inside the "public" directory can be accessed by clients (browsers) directly through the web server.
*/
app.use(express.static("public"));

/* 
This line sets the view engine for rendering dynamic content.
 In this case, it's set to 'ejs' (Embedded JavaScript). 
 This means that when you render views (HTML templates), Express will use the EJS templating engine to process and render dynamic content on the server side before sending it to the client.
*/
app.set('view engine', 'ejs');


/*
This line sets up middleware to parse incoming HTTP requests with Content-Type: application/x-www-form-urlencoded. 
It uses the body-parser middleware to parse the request body and populate the req.body object with the parsed data.
extended: true allows parsing of rich objects and arrays. 
*/
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb://localhost:27017/userDB",{userNewUrlParser: true});

app.get("/", function(req,res) {
    res.render("home");
});


// app.get("/login", function(req,res) {
    
// });


// app.get("/register", function(req,res) {
    
// });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
  