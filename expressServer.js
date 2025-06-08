const express = require("express");

const port = 3000;
const hostName = "localhost";

const app = expresss();

app.use((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Hello from Express Server</h1></body></html>");
});

app.listen(port, hostName, () => {
  console.log(`Server listening on: Port ${port} HostName ${hostName}`);
});
