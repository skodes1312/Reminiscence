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

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
