const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("root endpoint invoked");
  res.send(`<html><body style="margin:0;height:100vh;display:flex;justify-content:center;align-items:center;background:linear-gradient(135deg,#ff4e50,#1fddff);"><h1 style="color:white;font-size:60px;text-shadow:2px 2px 10px rgba(0,0,0,0.4);animation:glow 1.5s infinite alternate;">Hi DevOps 🚀</h1><style>@keyframes glow{from{transform:scale(1);}to{transform:scale(1.1);}}</style></body></html>`); });


app.get("/check", (req, res) => {
  console.log("health check endpoint invoked");
  res.json({ status: "OK." });
});

app.listen(3000,()=> {
  console.log("Server running on port 3000");
});