import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("Server Setup");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
