const http = require("http");

const port = 3000;
const hostName = "localhost";

const server = http.createServer((req, res) => {
  console.log("Server received a request");
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;

  res.end("<html><body><h1>Hello, World!</h1></body></html>");
});

server.listen(port, hostName, () => {
  console.log(`Server listen to: Port ${port} hostName ${hostName}`);
});
