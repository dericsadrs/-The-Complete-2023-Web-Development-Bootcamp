import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "admin",
  port: 5432,
});db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// an async function to check if the country is already visited
async function checkVisisted() {

  // use the await.db.query return the query results 
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];

  //iterate through each country and push the country_code to the countries array
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });

  // return countries array
  return countries;
}
// GET home page
app.get("/", async (req, res) => {

  // get the countries that are visited
  // since this is an asynchrounous function we await the function checkVisited if it's done processing the query
  const countries = await checkVisisted();

  // then render the countries values and the countries length
  res.render("index.ejs", { countries: countries, total: countries.length });
});

//INSERT new country
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
      const countries = await checkVisisted();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again.",
      });
    }
  } catch (err) {
    console.log(err);
    const countries = await checkVisisted();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
