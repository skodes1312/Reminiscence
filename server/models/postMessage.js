//This if for for creating database model for our project

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  messgae: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likesCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//This create a model of above defined schema
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
