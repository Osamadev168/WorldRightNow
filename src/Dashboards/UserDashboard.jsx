import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPosts } from "../Api/Api";

const UserDashboard = () => {
  const params = useParams();
  const authorId = params.authorId;
  const [blog, setBlog] = useState([]);
  const getData = () => {
    getUserPosts(authorId).then((res) => {
      setBlog(res.data);
    });
  };
  useEffect(() => {
    getData();
    console.log(blog);
  }, [authorId]);
  return (
    <div>
      {blog.length > 0 ? (
        blog.map((blogs, index) => {
          return (
            <div>
              <h1>{blogs.authorId}</h1>
              <h1>{blogs.title}</h1>
              <h1>Status: {blogs.approved === true ? "true" : "false"}</h1>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserDashboard;
