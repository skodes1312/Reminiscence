import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

//It is for seperating routes related to post from the index.js folder
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//All the routes to ./routes/post.js will be accessed using localhost://5000/posts url
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

//Cnnecting to Mongodb Database

const CONNECTION_URL =
  "mongodb+srv://aryachawdhary:Reminiscence@cluster0.bzuf1ws.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected.");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
