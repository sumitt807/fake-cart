const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send("hello this is testing");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Listening on port ' + PORT));  