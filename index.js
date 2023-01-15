require('colors');
let express = require('express');
let app = express();

require('./routes/login')(app);

app.use(express.static('static'));

const portNumber = 3000;
app.listen(portNumber,
    () => console.log('Listening on port '.yellow + `${portNumber}`.green)
);