const request = require("supertest");
const express = require("express");

// import your app logic
const app = express();

app.get("/", (req, res) => {
  res.send("Hi DevOps");
});

app.get("/check", (req, res) => {
  res.json({ status: "OK" });
});

describe("API Tests", () => {
  test("GET / should return Hi DevOps", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hi DevOps");
  });

  test("GET /check should return status OK", async () => {
    const res = await request(app).get("/check");
    expect(res.body.status).toBe("OK");
  });
});