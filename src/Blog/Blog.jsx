import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getBlog, submitComment } from "../Api/Api";
import profilepic from "../../assets/profilepic.jpg";
import commentPicture from "../../assets/comment.png";
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
      <Comments blog={blog} id={id} setRefresh={setRefresh} refresh={refresh} />
      <Popular category={blog.category} />
    </div>
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
    submitComment(id, comment).then(() => {
      setComment(defaultValues);
      setRefresh(!refresh);
    });
  };

  return (
    <div>
      <p className="comments">
        Comments ({blog.commentslength === 0 ? 0 : blog.commentslength})
      </p>
      {blog.comments && blog.comments.length > 0 ? (
        blog.comments.map((commment) => {
          const date = new Date(comment.date).toDateString();
          return (
            <div className="main_Comments_Container">
              <div className="photo_UserName_Contianer">
                <img className="avatar_Comment" />

                <p>{commment.username}</p>
                <p>|{date}</p>
              </div>
              <p className="comment_Content">{commment.comment}</p>
            </div>
          );
        })
      ) : (
        <></>
      )}
      {user !== null ? (
        <div>
          <div>
            <div className="photo_UserName_Contianer">
              <img className="avatar_Comment" />

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
          <div onClick={submit_Comment}>
            <img src={commentPicture} />
          </div>
        </div>
      ) : (
        <p>Login to comment on this blog</p>
      )}
    </div>
  );
};
export default Blog;
