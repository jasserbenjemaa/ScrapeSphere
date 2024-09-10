import dan from "../scraper/dan.js";
import josh from "../scraper/josh.js";
import jsToday from "../scraper/jsToday.js";
import swizec from "../scraper/swizec.js";

import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/jsToday", async (req, res) => {
  try {
    const jsTodayData = await jsToday();
    res.send(jsTodayData);
  } catch (e) {
    console.log(e);
  }
});
app.get("/dan", async (req, res) => {
  try {
    const danData = await dan();
    res.send(danData);
  } catch (e) {
    console.log(e);
  }
});

app.get("/josh", async (req, res) => {
  try {
    const joshData = await josh();
    res.send(joshData);
  } catch (e) {
    console.log(e);
  }
});
app.get("/swizec", async (req, res) => {
  try {
    const swizecData = await swizec();
    res.send(swizecData);
  } catch (e) {
    console.log(e);
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
