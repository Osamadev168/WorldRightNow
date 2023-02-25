import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlog, submitComment } from "../Api/Api";
import profilepic from "../../assets/profilepic.jpg";
import image from "../../assets/1.jpg";
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
  const navigate = useNavigate();
  const doc_title = blog.title;
  useEffect(() => {
    fetchBlog(id);
    document.title = doc_title;

    window.scrollTo(0, 0);
    if (refresh) {
      fetchBlog(id);
    }
  }, [id, refresh, doc_title]);
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
        <div className="blogLeft">
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
          <div>
            {blog.tags && blog.tags.length > 0 ? (
              blog.tags.map((tags) => {
                return (
                  <div style={{ color: "green", backgroundColor: "black" }}>
                    <p
                      onClick={() =>
                        navigate(`/blog/${tags.replace(/\s+/g, "-")}`)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {tags}
                    </p>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
          <Comments
            blog={blog}
            id={id}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        </div>
        <div className="blogRight">
          <div className="blogRightContent">
            <div className="authorBlogs">
              <h4>More from Daniyal</h4>
              <div className="Card">
                <div className="blogContent">
                  <h5 className="posttitle">{"Technology"}</h5>
                  <div className="info">
                    <p>{"Jan 19, 2023"}</p>
                    <p>&nbsp;|&nbsp;</p>
                    {<p>4 mins read</p>}
                  </div>
                  <h3 className="blogtitle">
                    {"10 Breakthrough Technologies Changing Our World"}
                  </h3>
                </div>
                <div
                  className="blogImage"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
              <div className="Card">
                <div className="blogContent">
                  <h5 className="posttitle">{"Technology"}</h5>
                  <div className="info">
                    <p>{"Jan 19, 2023"}</p>
                    <p>&nbsp;|&nbsp;</p>
                    {<p>4 mins read</p>}
                  </div>
                  <h3 className="blogtitle">
                    {"10 Breakthrough Technologies Changing Our World"}
                  </h3>
                </div>
                <div
                  className="blogImage"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
              <div className="Card">
                <div className="blogContent">
                  <h5 className="posttitle">{"Technology"}</h5>
                  <div className="info">
                    <p>{"Jan 19, 2023"}</p>
                    <p>&nbsp;|&nbsp;</p>
                    {<p>4 mins read</p>}
                  </div>
                  <h3 className="blogtitle">
                    {"10 Breakthrough Technologies Changing Our World"}
                  </h3>
                </div>
                <div
                  className="blogImage"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
              <div className="Card">
                <div className="blogContent">
                  <h5 className="posttitle">{"Technology"}</h5>
                  <div className="info">
                    <p>{"Jan 19, 2023"}</p>
                    <p>&nbsp;|&nbsp;</p>
                    {<p>4 mins read</p>}
                  </div>
                  <h3 className="blogtitle">
                    {"10 Breakthrough Technologies Changing Our World"}
                  </h3>
                </div>
                <div
                  className="blogImage"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
            </div>
            <div className="blogTags">
              <h4>Tags</h4>
              <div className="tagsContainer">
                <a className="tag">Gadgets</a>
                <a className="tag">Artificial Intelligence</a>
                <a className="tag">Cybersecurity</a>
                <a className="tag">Software Development</a>
                <a className="tag">Tech News</a>
                <a className="tag">Digital Marketing</a>
                <a className="tag">Mobile Devices</a>
                <a className="tag">Future Technology</a>
                <a className="tag">Cloud Computing</a>
                <a className="tag">Blockchain</a>
              </div>
            </div>
          </div>
        </div>
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
          const date = new Date(commment.date).toDateString();
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
