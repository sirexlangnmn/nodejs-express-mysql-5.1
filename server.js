const express = require("express");
const bodyParser = require("body-parser");
const PORT = 5001;

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome. Hello Universe." });
});

require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
app.listen(PORT, () => {
  console.log("Server is running on port localhost:" + PORT);
});
