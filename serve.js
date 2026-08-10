// Mini servidor: sirve index.html en http://localhost:8347
const http = require("http");
const fs = require("fs");
const path = require("path");

const PAGE = path.join(__dirname, "index.html");

http.createServer((req, res) => {
  fs.readFile(PAGE, (err, buf) => {
    if (err) { res.writeHead(500); res.end("no encuentro index.html"); return; }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
    res.end(buf);
  });
}).listen(8347, () => console.log("sirviendo index.html en http://localhost:8347"));
