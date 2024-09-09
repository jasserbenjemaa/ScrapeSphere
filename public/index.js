import express from "express";
import dotenv from "dotenv";
import getData from "../scraper/index.js";
dotenv.config();
const app = express();

app.get("/", async (req, res) => {
  try {
    const data = await getData();
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
