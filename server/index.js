import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

//It is for seperating routes related to post from the index.js folder
import postRoutes from "./routes/posts.js";

const app = express();

//All the routes to ./routes/post.js will be accessed using localhost://5000/posts url
app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Cnnecting to Mongodb Database

const CONNECTION_URL =
  "mongodb+srv://ayush81029:ayush81029@cluster0.w77swhj.mongodb.net/";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected.");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
