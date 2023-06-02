//this is for keeping functionalities of the ./routes/posts.js files in a seprate file so that we can easily handle ./routes/posts.js

import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    //await because .find() takes a lot of time. So, it must be async.
    const postMessages = await PostMessage.find();

    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
