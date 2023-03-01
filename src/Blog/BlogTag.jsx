import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBlogsfromTag } from "../Api/Api";
import profilepic from "../../assets/profilepic.jpg";
import image from "../../assets/1.jpg";

const BlogTag = () => {
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const tag = params.tags;
  const getData = () => {
    getBlogsfromTag(tag).then((res) => {
      setBlogs(res.data);
      const blogtags = res.data.reduce(
        (accumulator, obj) => [...accumulator, ...obj.tags],
        []
      );
      let unique = [...new Set(blogtags)];
      setTags(unique);
    });
  };

  useEffect(() => {
    getData();
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
