const fs = require("fs");
const http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });

    // const fileData = fs.readFileSync(__dirname + "/fileSystemExample.txt", "utf8", function (err, data) {
    //     if (err) throw err
    //     return data;
    // })

    try {
        const fileData = fs.readFileSync(__dirname + "/fileSystemExample.txt", "utf8");
        res.write(fileData);
    } catch (e) {
        console.log(e);
    }

    res.write("fileData");
    res.end();

}).listen(80, "sumit.com");