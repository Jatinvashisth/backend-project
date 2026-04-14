const express = require("express");
const app = express();

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hi DevOps");
});

// Health check endpoint
app.get("/check", (req, res) => {
  res.json({ status: "OK" });
});

// Server start
app.listen(8080,()=> {
  console.log("Server running on port 3000");
});