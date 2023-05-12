// This is help in fetching the data from the API or our database.
// It is promise based.

import axios from "axios";

// This is the url pointing our backend route
const url = "http://localhost:5000/posts";

// this will fetch data from the backend server
export const fetchPosts = () => axios.get(url);
