import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true,  
}))

app.get("/", (req, res) => {
  console.log("directory name:",__dirname);
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req,res) => {
  console.log("Response Body: ",res.body);
  console.log("Request Body: ",req.body);
  res.send("app.post triggered");
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
