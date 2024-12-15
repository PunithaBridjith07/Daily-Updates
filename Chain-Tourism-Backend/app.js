// import fs from "node:fs/promises";

const fs = require("fs").promises;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
// app.use(express.static('images'))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

//code

app.get("/chain", async (req, res) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const fileContent = await fs.readFile("./data/defaultAppData.json", "utf-8");
  const defaultAppData = JSON.parse(fileContent);
  res.status(200).json({ defaultAppData });
});

app.use((req, res, next) => {
  if (req.method == "OPTIONS") {
    return next();
  }
  res.status(404).json({ message: "404 - Not Found" });
});

app.listen(3000, () => console.log(`Server started at http://localhost:3000`));
