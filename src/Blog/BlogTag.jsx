import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogsfromTag } from "../Api/Api";
const BlogTag = () => {
  const [blogs, setBlogs] = useState([]);
  const params = useParams();
  const tag = params.tags;
  const getData = () => {
    getBlogsfromTag(tag).then((res) => {
      setBlogs(res.data);
    });
  };
  useEffect(() => {
    getData();
    console.log(blogs);
  }, [tag]);
  return (
    <div style={{ margin: 100 }}>
      {blogs && blogs.length > 0 ? (
        blogs.map((blogs) => {
          return <h1> title : {blogs.title} </h1>;
        })
      ) : (
        <></>
      )}
    </div>
  );
};
export default BlogTag;
