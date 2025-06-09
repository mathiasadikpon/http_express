const express = require("express");
const campsiteRouter = express.Router();

campsiteRouter
  .route("/")
  .all((req, res, next) => {
    console.log("Request Type:", req.method);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next(); // Pass control to the next handler
  })
  .get((req, res) => {
    res.end("Will send all the campsites to you!");
  })
  .post((req, res) => {
    res.end(
      `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403; // Forbidden
    res.end("PUT operation not supported on /campsites");
  })
  .delete((req, res) => {
    res.end("Deleting all campsites"); // Set the response message
  });

campsiteRouter
  .route("/:campsiteId")
  .all((req, res, next) => {})
  .get((req, res) => {
    res.end(
      `Will send details of the campsite: ${req.params.campsiteId} to you!`
    );
  })
  .put((req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(
      `Will update the campsite: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .post((req, res) => {
    res.statusCode = 403; // Forbidden
    res.end(
      `POST operation not supported on /campsites/${req.params.campsiteId}`
    );
  })
  .delete((req, res) => {
    res.end(`Will delete campsite: ${req.params.campsiteId}`); // Set the response message
  });

module.exports = campsiteRouter;
