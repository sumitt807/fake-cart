const express = require("express");
const app = express();

app.get('/test', function (req, res) {
    res.send("hello this is testing");
});

app.listen(3000, "sumit.com");  