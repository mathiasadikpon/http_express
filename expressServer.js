// requires
const express = require("express");
const morgan = require("morgan");
const campsiteRouter = riquire("./routes/campsiteRouter"); // Import the campsite router

const port = 3000;
const hostName = "localhost";

const app = express();
app.use(morgan("dev")); // Logging middleware console logs
app.use(express.json()); // Middleware to parse JSON bodies

app.use("/campsites", campsiteRouter); // Use the campsite router for /campsites endpoint);

app.use(express.static(__dirname + "/public")); // Serve static files from the public directory

app.use((req, res) => {
  //console.log(req.headers); // Morgan take care of it
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Hello from Express Server</h1></body></html>");
});

app.listen(port, hostName, () => {
  console.log(`Server listening on: Port ${port} HostName ${hostName}`);
});
