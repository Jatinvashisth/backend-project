const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("root endpoint invoked");
  res.send("Hi DevOps");
});

app.get("/check", (req, res) => {
  console.log("health check endpoint invoked");
  res.json({ status: "OK" });
});

app.listen(3000,()=> {
  console.log("Server running on port 3000");
  console.log("Server running ....");
  
});