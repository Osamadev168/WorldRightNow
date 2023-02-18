import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getBlog, submitComment } from "../Api/Api";
import profilepic from "../../assets/profilepic.jpg";
import Popular from "../Home/Popular";
import { useContext } from "react";
import { UserContext } from "../Context/Context";
const Blog = () => {
  const [blog, setBlog] = useState({});
  const [refresh, setRefresh] = useState(false);
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

    if (refresh) {
      fetchBlog(id);
    }
  }, [id, refresh]);
  let wordsPerMinute = 150;
  let noOfWords = blog.body?.split(" ").length;
  let readingTime = noOfWords / wordsPerMinute;
  let round = Math.floor(readingTime);
  let date = new Date(blog.CreatedAt).toDateString();
  let displayMonth = date.substring(4, 10);
  let displayYear = date.substring(10);
  let displayDate = `${displayMonth},${displayYear}`;
  return (
    <>
      <div className="blogMainContainer paddingtop">
        <div className="blogDateandReadTime">
          <p>{displayDate}</p>
          <p>&nbsp;|&nbsp;</p>

          {round <= 0 ? <p>Quick Read</p> : <p>{round} mins read</p>}
        </div>
        <div className="titleandDescriptionImage">
          <h1 className="blogTitle">{blog.title}</h1>
          <p className="blogDescription">{blog.description}</p>
          <div className="imageAuthorName">
            <img src={profilepic} className="auhtorImage" />
            <p className="authorName">{blog.author}</p>
          </div>
          <div
            className="blogImage"
            style={{
              backgroundImage: `url(${blog.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "450px",
            }}
          ></div>
        </div>

        <div
          className="blogBody"
          dangerouslySetInnerHTML={{ __html: blog.body }}
        ></div>
        <Comments
          blog={blog}
          id={id}
          setRefresh={setRefresh}
          refresh={refresh}
        />
      </div>
      <div className="sliderBlogPage">
        <Popular category={blog.category} />
      </div>
    </>
  );
};
const Comments = ({ blog, id, setRefresh, refresh }) => {
  const defaultValues = {
    username: "",
    comment: "",
    date: new Date(),
  };
  const [comment, setComment] = useState(defaultValues);
  const { user } = useContext(UserContext);
  const submit_Comment = () => {
    if (comment.comment !== "") {
      submitComment(id, comment).then(() => {
        setComment(defaultValues);
        setRefresh(!refresh);
      });
    } else {
      alert("Comment must not be empty..!!");
    }
  };

  return (
    <div className="commentsContainer">
      <h4 className="comments">
        {blog.comments ? `Comments (${blog.comments.length})` : "Comments"}
      </h4>
      {blog.comments && blog.comments.length > 0 ? (
        blog.comments.map((commment) => {
          const date = new Date(comment.date).toDateString();
          return (
            <div className="main_Comments_Container">
              <div className="photo_UserName_Contianer">
                <img className="avatar_Comment" src={profilepic} />
                <p>{commment.username}</p>
                <p>&nbsp;&nbsp;|&nbsp; &nbsp;{date}</p>
              </div>
              <p className="comment_Content">{commment.comment}</p>
            </div>
          );
        })
      ) : (
        <></>
      )}
      {user !== null ? (
        <div className="commentAreaContainer">
          <div>
            <div className="photo_UserName_Contianer">
              <img className="avatar_Comment" src={profilepic} />
              <p>{user.displayName}</p>
            </div>
            <textarea
              value={comment.comment}
              className="comment_Area"
              onChange={(e) =>
                setComment({
                  ...comment,
                  username: user.displayName,
                  comment: e.target.value,
                  date: new Date(),
                })
              }
            />
          </div>
          <a onClick={submit_Comment} className="commentButton">
            Submit
            <svg
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989593 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM1 6.75H21V5.25H1V6.75Z"
                fill="#FC2C7E"
              />
            </svg>
          </a>
        </div>
      ) : (
        <p>Login to comment on this blog</p>
      )}
    </div>
  );
};

export default Blog;
