import axios from "axios";
export const fetchDataPopular = async (category) => {
  let response = await axios.post("http://localhost:5000/popularposts", {
    category: category,
  });
  return response;
};
export const fetchDataLatest = async (category) => {
  let response = await axios.post("http://localhost:5000/latestposts", {
    category: category,
  });

  return response;
};
export const submitPost = async (blog) => {
  try {
    await axios.post("http://localhost:5000/create", blog);
  } catch (e) {
    console.log(e);
  }
};
