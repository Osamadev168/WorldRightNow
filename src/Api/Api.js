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
export const getAllBlogs = async (page, limit, category) => {
  try {
    let response = await axios.post(
      `${url}/get/all/blogs/popular/${page}/${limit}`,
      { category: category }
    );

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
  } catch (e) {
    console.error(e.message);
  }
};
export const fetchDataPopular = async (page, limit, category) => {
  let response = await axios.post(
    `${url}/get/all/blogs/popular/${page}/${limit}`,
    {
      category: category,
    }
  );
  return response;
};
export const fetchDataLatest = async (page, limit, category) => {
  let response = await axios.post(
    `${url}/get/all/blogs/latest/${page}/${limit}`,
    {
      category: category,
    }
  );
  return response;
};
export const submitPost = async (blog, token) => {
  try {
    await axios.post(`${url}/create/${token}`, blog);
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
export const getBlogData_Update = async (id) => {
  try {
    let response = await axios.get(`${url}/blog/data/${id}`);
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

export const SearchBlogs = async (query) => {
  try {
    let response = await axios.get(`${url}/search?blogs=${query}`);
    return response;
  } catch (e) {
    console.error(e.message);
  }
};

export const getBlogsForSlider = async () => {
  try {
    let response = await axios.get(`${url}/blogs/slider`);
    return response;
  } catch (e) {
    console.error(e.message);
  }
};
