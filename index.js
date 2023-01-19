const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/public", express.static("public"));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 600000,
    },
  })
);

/* routing betöltése */
require("./routes/index")(app);
require("./routes/auth")(app);
require("./routes/admin")(app);
require("./routes/student")(app);

app.use((error, req, res, next) => {
  res.end("There was a porblem...");
  console.log(error);
});

const portNumber = 3000;
app.listen(portNumber, () => console.log(`Listening on port ${portNumber}`));
