import axios from "axios";
const url = "http://localhost:7000";
export const upload_Image = async (image) => {
  try {
    let response = await axios.post(`${url}/upload/image`, image);
    return response;
  } catch (e) {
    alert(e.message);
  }
};
export const getAllBlogs = async (page, limit) => {
  try {
    let response = await axios.get(`${url}/get/all/blogs/${page}/${limit}`);

    return response;
  } catch (e) {
    console.error(e.message);
  }
};
export const UserStatus = async (token) => {
  try {
    let response = await axios.post(`${url}/admin`, {
      idToken: token,
    });
    return response;
  } catch {
    console.error(e.message);
  }
};
export const fetchDataPopular = async (category) => {
  let response = await axios.post(`${url}/popularposts`, {
    category: category,
  });
  return response;
};
export const fetchDataLatest = async (category) => {
  let response = await axios.post(`${url}/latestposts`, {
    category: category,
  });
  return response;
};
export const submitPost = async (blog) => {
  try {
    await axios.post(`${url}/create`, blog);
  } catch (e) {
    console.error(e);
  }
};
export const getUserPosts = async (authorId) => {
  try {
    let response = await axios.get(
      `${url}/posts/submitted/user/author/${authorId}`
    );
    return response;
  } catch (e) {
    console.error(e);
  }
};
export const getSubmittedPosts = async () => {
  try {
    let response = await axios.get(`${url}/posts/submitted`);
    return response;
  } catch (e) {
    console.error(e);
  }
};
export const approveBlog = async (id, token) => {
  try {
    await axios.post(`${url}/post/approve/${id}`, token);
  } catch (e) {
    console.error(e.message);
  }
};
export const getBlog = async (id) => {
  try {
    let response = await axios.get(`${url}/blog/${id}`);
    return response;
  } catch (e) {
    console.error(e.message);
  }
};
export const submitComment = async (postId, comment) => {
  try {
    await axios.post(`${url}/post/${postId}/new/comment`, comment);
  } catch (e) {
    console.error(e);
  }
};
export const deletePostAdmin = async (id) => {
  try {
    await axios.delete(`${url}/post/${id}`);
  } catch (e) {
    console.error(e.message);
  }
};
export const deletePostUser = async (id) => {
  try {
    await axios.delete(`${url}/post/user/delete/blog/${id}`);
  } catch (e) {
    console.error(e.message);
  }
};
export const getBlogsfromTag = async (tag) => {
  try {
    let response = await axios.get(`${url}/blog/tag/${tag}`);
    return response;
  } catch (e) {
    console.error(e.message);
  }
};
export const edit_Blog = async (id, blog) => {
  try {
    await axios.put(`${url}/blog/update/${id}`, blog);
  } catch (e) {
    console.error(e.message);
  }
};
export const author_blogs = async (author) => {
  try {
    let response = await axios.get(`${url}/blogs/author/${author}`);
    return response;
  } catch (e) {
    console.error(e.message);
  }
};
export const UpdateUserData = async (user, uid, displayName, photoURL) => {
  try {
    await axios.put(`http://localhost:7000/blog/update`, {
      authorId: uid,
      authorName: displayName,
      authorImage: user && photoURL,
    });
    await axios.post("http://localhost:7000/blog/update/comments", {
      authorId: uid,
      authorName: displayName,
      authorImage: user && photoURL,
    });
  } catch (e) {
    console.error(e.message);
  }
};
