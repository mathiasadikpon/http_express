const http = require("http");
const path = require("path");
const fs = require("fs");

const port = 3000;
const hostName = "localhost";

const server = http.createServer((req, res) => {
  let fileUrl = req.url;
  console.log(`Request for ${fileUrl} received.`);
  if (fileUrl === "/") {
    fileUrl = "/index.html";
  }
  const filePath = path.resolve("./public" + fileUrl);
  const fileExt = path.extname(filePath);
  if (fileExt !== ".html") {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>Error 404: Not a HTML file</h1></body></html>");
    return;
  }
  fs.access(filePath, (err) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end("<html><body><h1>Error 404: File not found</h1></body></html>");
      return;
    }
    // fs.readFile(filePath, (err, data) => {
    //   if (err) {
    //     res.statusCode = 500;
    //     res.setHeader("Content-Type", "text/html");
    //     res.end(
    //       "<html><body><h1>Error 500: Internal Server Error</h1></body></html>"
    //     );
    //     return;
    //   }
    //   res.statusCode = 200;
    //   res.setHeader("Content-Type", "text/html");
    //   res.end(data);
    // });

    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(port, hostName, () => {
  console.log(`Server listen to: Port ${port} hostName ${hostName}`);
});
