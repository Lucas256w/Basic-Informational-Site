const http = require("node:http");
const path = require("path");
const fs = require("fs");

const hostname = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
  let file = "";
  switch (req.url) {
    case "/":
      file = "./index.html";
      break;
    case "/about":
      file = "./about.html";
      break;
    case "/contact-me":
      file = "./contact-me.html";
      break;
    default:
      file = "./404.html";
  }

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      return res.end("404 Not Found");
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
