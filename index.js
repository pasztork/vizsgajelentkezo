const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set("view engine", "ejs");
require("./routes/index")(app);
require("./routes/login")(app);
require("./routes/admin")(app);
require("./routes/student")(app);

const portNumber = 3000;
app.listen(portNumber, () => console.log(`Listening on port ${portNumber}`));
