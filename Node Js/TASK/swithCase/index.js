const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  
  
    fs.appendFile("text.txt", log, (err, data) => {
  
      switch (req.url) {
        case "/":
          res.end("Home Page IS Ready To Load...");
  
          break;
        case "/about":
          res.end("About Page IS Ready To Load...");
  
          break;
  
        default:
          res.end("404 Error");
      }
    });
  });
  