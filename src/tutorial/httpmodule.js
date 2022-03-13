const http = require("http");

const server = http.createServer(function (req, res) {
    res.write("<h1>Hello</h1>");
    res.end();
}).listen(80, "sumit.com");