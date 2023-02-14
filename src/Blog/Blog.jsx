import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../Api/Api";
import profilepic from "../../assets/profilepic.jpg";

const Blog = () => {
  const [blog, setBlog] = useState({});
  const params = useParams();
  const id = params._id;
  const fetchBlog = (id) => {
    getBlog(id).then((res) => {
      setBlog(res.data);
    });
  };
  useEffect(() => {
    fetchBlog(id);
    window.scrollTo(0, 0);
  }, [id]);
  let wordsPerMinute = 150;
  let noOfWords = blog.body?.split(" ").length;
  let readingTime = noOfWords / wordsPerMinute;
  let round = Math.floor(readingTime);
  let date = new Date(blog.CreatedAt).toDateString();
  let displayMonth = date.substring(4, 10);
  let displayYear = date.substring(10);
  let displayDate = `${displayMonth},${displayYear}`;
  return (
    <div className="blogMainContainer">
      <div className="blogDateandReadTime">
        <p>{displayDate} |</p>
        {round <= 0 ? <p>Quick Read</p> : <p>{round} mins read</p>}
      </div>
      <div className="titleandDescriptionImage">
        <p className="blogTitle">{blog.title}</p>
        <p className="blogDescription">{blog.description}</p>
        <div className="imageAuthorName">
          <img src={profilepic} className="auhtorImage" />
          <p className="authorName">{blog.author}</p>
        </div>
        <div className="blogImage">
          <img style={{ width: "100%", height: 524 }} src={blog.image} />
        </div>
      </div>

      <div
        className="blogBody"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      ></div>
    </div>
  );
};

export default Blog;
