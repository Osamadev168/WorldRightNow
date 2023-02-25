import axios from "axios";
export const addUser = async (user) => {
  try {
    await axios.post("http://localhost:7000/createUser", user);
  } catch (e) {
    console.log(e);
  }
};
export const fetchDataPopular = async (category) => {
  let response = await axios.post("http://localhost:7000/popularposts", {
    category: category,
  });
  return response;
};
export const fetchDataLatest = async (category) => {
  let response = await axios.post(`http://localhost:7000/latestposts`, {
    category: category,
  });
  return response;
};
export const submitPost = async (blog) => {
  try {
    await axios.post("http://localhost:7000/create", blog);
  } catch (e) {
    console.log(e);
  }
};
export const getUserPosts = async (authorId) => {
  try {
    let response = await axios.get(
      `http://localhost:7000/posts/submitted/user/author/${authorId}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
export const getSubmittedPosts = async () => {
  try {
    let response = await axios.get(`http://localhost:7000/posts/submitted`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
export const approveBlog = async (id) => {
  try {
    await axios.post(`http://localhost:7000/post/approve/${id}`);
  } catch (e) {
    console.log(e.message);
  }
};
export const getBlog = async (id) => {
  try {
    let response = await axios.get(`http://localhost:7000/blog/${id}`);
    return response;
  } catch (e) {
    console.log(e.message);
  }
};
export const submitComment = async (postId, comment) => {
  try {
    await axios.post(
      `http://localhost:7000/post/${postId}/new/comment`,
      comment
    );
  } catch (e) {
    console.log(e);
  }
};
export const deletePostAdmin = async (id) => {
  try {
    await axios.delete(`http://localhost:7000/post/${id}`);
  } catch (e) {
    console.log(e.message);
  }
};
export const deletePostUser = async (id) => {
  try {
    await axios.delete(`http://localhost:7000/post/user/delete/blog/${id}`);
  } catch (e) {
    console.log(e.message);
  }
};
export const getBlogsfromTag = async (tag) => {
  try {
    let response = await axios.get(`http://localhost:7000/blog/tag/${tag}`);
    return response;
  } catch (e) {
    console.log(e.message);
  }
};
export const edit_Blog = async (id, blog) => {
  try {
    await axios.put(`http://localhost:7000/blog/update/${id}`, blog);
  } catch (e) {
    console.log(e.message);
  }
};
export const author_blogs = async (author) => {
  try {
    let response = await axios.get(
      `http://localhost:7000/blogs/author/${author}`
    );
    return response;
  } catch (e) {
    console.error(e.message);
  }
};
