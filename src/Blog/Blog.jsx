import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { author_blogs, getBlog, submitComment } from "../Api/Api";
import profilepic from "../../assets/avatar.svg";
import Popular from "../Home/Popular";
import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { Helmet } from "react-helmet";
import ReactHtmlParser from "react-html-parser";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import facebookIcon from "../../assets/facebook-Icon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import whatsappIcon from "../../assets/whatsappIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";
const Blog = () => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);
  const [authorBlogs, setAuthorBlogs] = useState([]);
  const [author, setblogAuthor] = useState(blog && blog.author);
  const [refresh, setRefresh] = useState(false);
  const params = useParams();
  const { admin } = useContext(UserContext);
  const id = params._id;
  const fetchBlog = (id) => {
    setLoading(true);
    getBlog(id).then((res) => {
      setBlog(res.data);
      setblogAuthor(res.data.author);
      setLoading(false);
    });
  };
  const getAuhorBlogs = () => {
    author_blogs(author).then((res) => {
      setAuthorBlogs(res.data);
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    fetchBlog(id);
    setTimeout(() => {
      getAuhorBlogs();
    }, 1000);
    if (refresh) {
      fetchBlog(id);
    }
  }, [id, refresh, author]);
  let wordsPerMinute = 150;
  let noOfWords = blog.body?.split(" ").length;
  let readingTime = noOfWords / wordsPerMinute;
  let round = Math.floor(readingTime);
  let date = new Date(blog.CreatedAt).toDateString();
  let displayMonth = date.substring(4, 10);
  let displayYear = date.substring(10);
  let displayDate = `${displayMonth},${displayYear}`;
  let title = blog.title?.replace(/[^a-zA-Z0-9 ]/g, "-");
  title = title?.replace(/\s+/g, "-");
  let category = blog.category?.replace(/\s+/g, "-");
  return (
    <>
      <div className="blogMainContainer paddingtop">
        <Helmet>
          <meta charSet="utf-8" name="description" content={blog.description} />
          <title>{blog && blog.title}</title>

          <link
            rel="canonical"
            href={`https://www.hubblefeed.com/${category}/${title}/${blog._id}`}
          />
        </Helmet>

        <div className="blogLeft">
          {loading ? (
            <span className="loader"></span>
          ) : (
            <>
              <div className="blogDateandReadTime">
                <p>{displayDate}</p>
                <p>&nbsp;|&nbsp;</p>

                {round <= 0 ? <p>Quick Read</p> : <p>{round} mins read</p>}
              </div>
              <div className="titleandDescriptionImage">
                <h1 className="blogTitle">{blog.title}</h1>
                <p className="blogDescription">{blog.description}</p>
                {!admin ? (
                  <> </>
                ) : (
                  <div
                    className="edit"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/blog/edit/${blog._id}`)}
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.4714 0.0504584C21.3638 0.0895796 21.1877 0.162932 21.0802 0.221614C20.9579 0.285186 18.6987 2.51509 15.1826 6.036L9.48073 11.7477L9.0993 13.6549C8.77166 15.3175 8.73253 15.5816 8.77655 15.7381C8.84012 15.9483 9.10419 16.1977 9.30957 16.2466C9.40737 16.2662 10.0529 16.1586 11.2118 15.9288C12.1752 15.7381 13.0408 15.562 13.1337 15.5376C13.2706 15.4984 14.4344 14.359 19.0312 9.75741C25.4715 3.3073 24.9923 3.84521 24.9923 3.06768C24.9874 2.39773 24.8945 2.24125 23.8284 1.17519C23.1096 0.456341 22.8846 0.260735 22.6548 0.158042C22.3174 0.00155686 21.7697 -0.0473446 21.4714 0.0504584ZM22.7868 2.23147C23.4519 2.89653 23.5595 3.02367 23.535 3.12147C23.5155 3.18504 23.3052 3.43444 23.0607 3.67895L22.6206 4.11906L21.7501 3.24862L20.8846 2.38306L21.354 1.9185C21.6181 1.65932 21.8626 1.45393 21.9164 1.45393C21.9702 1.45393 22.3272 1.7669 22.7868 2.23147ZM20.7134 4.31467L21.5692 5.17045L17.0751 9.66449L12.5811 14.1585L11.5346 14.3639C10.9624 14.4813 10.4783 14.5595 10.4588 14.5449C10.4441 14.5253 10.5223 14.0461 10.6348 13.4739L10.8402 12.4323L15.3245 7.94316C17.7891 5.47852 19.8185 3.45889 19.8332 3.45889C19.8478 3.45889 20.2439 3.84521 20.7134 4.31467Z"
                        fill="black"
                      />
                      <path
                        d="M2.15557 4.04572C1.20688 4.24132 0.434239 4.92105 0.11638 5.84529L0.00390625 6.17293V14.5106V22.8483L0.11638 23.1711C0.395118 23.9829 1.02106 24.6088 1.82793 24.8875L2.15557 25H10.4933H18.831L19.1586 24.8875C19.9557 24.6088 20.5572 24.0171 20.8702 23.1858L20.9827 22.8972L20.9973 17.166C21.0071 11.4787 21.0071 11.4298 20.9093 11.2342C20.7968 11.0142 20.5181 10.843 20.2736 10.843C20.0291 10.843 19.7503 11.0142 19.6379 11.2342C19.5401 11.425 19.5401 11.5081 19.5401 16.9704C19.5401 23.2004 19.5645 22.8043 19.1733 23.1907C18.7772 23.5868 19.4814 23.5574 10.4933 23.5574C1.50518 23.5574 2.20936 23.5868 1.81326 23.1907C1.41716 22.7946 1.4465 23.4987 1.4465 14.5106C1.4465 5.52254 1.41716 6.22672 1.81326 5.83062C2.19958 5.43941 1.80348 5.46386 8.03353 5.46386C13.4958 5.46386 13.579 5.46386 13.7697 5.36606C13.9897 5.25358 14.1609 4.97484 14.1609 4.73034C14.1609 4.48583 13.9897 4.20709 13.7697 4.09462C13.579 3.99681 13.5007 3.99681 7.96507 4.0017C4.87939 4.00659 2.26316 4.02615 2.15557 4.04572Z"
                        fill="black"
                      />
                    </svg>
                    Edit
                  </div>
                )}
                <div className="shareAndImageWrapper">
                  <div className="imageAuthorName">
                    <img
                      src={blog.authorImage}
                      className="auhtorImage"
                      alt="author_image"
                      width={30}
                      height={30}
                    />
                    <p className="authorName">{blog.author}</p>
                    <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                    <p className="blogCategory">{blog.category}</p>
                  </div>
                  <div className="shareIcons">
                    <FacebookShareButton
                      url={window.location.href}
                      quote={`${blog.title}`}
                    >
                      <button className="shareButton" type="button">
                        <img
                          src={facebookIcon}
                          alt="facebook-icon"
                          width={20}
                          height={20}
                        />
                      </button>
                    </FacebookShareButton>

                    <TwitterShareButton
                      url={window.location.href}
                      title={blog.title}
                      via="HubbleFeed"
                    >
                      <button className="shareButton" type="button">
                        <img
                          src={twitterIcon}
                          alt="facebook-icon"
                          width={20}
                          height={20}
                        />
                      </button>
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url={window.location.href}
                      title={blog.title}
                      separator={blog.description}
                    >
                      <button className="shareButton" type="button">
                        <img
                          src={whatsappIcon}
                          alt="facebook-icon"
                          width={20}
                          height={20}
                        />
                      </button>
                    </WhatsappShareButton>
                    <button
                      className="shareButton"
                      type="button"
                      onClick={() => {
                        navigator.clipboard
                          .writeText(window.location.href)
                          .then(() => {
                            alert("Link Copied to Clipboard!");
                          });
                      }}
                    >
                      <img
                        src={shareIcon}
                        alt="facebook-icon"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>

                <img
                  className="blogImage"
                  src={blog.image}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt="blog_image"
                  width="100%"
                  height={450}
                  loading="lazy"
                />
              </div>

              <div className="blogBody">{ReactHtmlParser(blog.body)}</div>

              <Comments
                blog={blog}
                id={id}
                setRefresh={setRefresh}
                refresh={refresh}
              />
            </>
          )}
        </div>

        <div className="blogRight">
          <div className="blogRightContent">
            <div className="authorBlogs">
              <h4>More from {blog.author}</h4>
              {authorBlogs && authorBlogs.length > 0 ? (
                authorBlogs.map((blog, index) => {
                  let wordsPerMinute = 150;
                  let noOfWords = blog.body?.split(" ").length;
                  let readingTime = noOfWords / wordsPerMinute;
                  let round = Math.floor(readingTime);
                  let date = new Date(blog.CreatedAt).toDateString();
                  let displayMonth = date.substring(4, 10);
                  let displayYear = date.substring(10);
                  let displayDate = `${displayMonth},${displayYear}`;
                  let title = blog.title;
                  title = title.replace(/\s+/g, "-");
                  title = title.replace(/[^a-zA-Z0-9 ]/g, "-");
                  let category = blog.category;
                  category = category.replace(/\s+/g, "-");
                  return (
                    <div
                      className="Card"
                      onClick={() =>
                        navigate(`/${category}/${title}/${blog._id}`)
                      }
                      key={index}
                    >
                      <div className="blogContent">
                        <h5 className="posttitle">{blog.category}</h5>
                        <div className="info">
                          <p>{displayDate}</p>
                          <p>&nbsp;|&nbsp;</p>
                          <p>
                            {round <= 0 ? (
                              <p>Quick Read</p>
                            ) : (
                              <p>{round} mins read</p>
                            )}
                          </p>
                        </div>
                        <h3 className="blogtitle">{blog.title}</h3>
                      </div>
                      <img
                        className="blogImage"
                        src={blog.image}
                        alt="author_blog_image"
                        loading="lazy"
                      />
                    </div>
                  );
                })
              ) : (
                <span className="loader"></span>
              )}
            </div>
            <div className="blogTags">
              <h4>Tags</h4>
              <div className="tagsContainer">
                {blog.tags && blog.tags.length > 0 ? (
                  blog.tags.map((tag, index) => {
                    return (
                      <a
                        className="tag"
                        href={`/blog/${tag.replace(/\s+/g, "-")}`}
                      >
                        {tag}
                      </a>
                    );
                  })
                ) : (
                  <></>
                )}
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
  const [userid, setuserid] = useState("");
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (comment.comment !== "") {
        submitComment(id, comment).then(() => {
          setComment(defaultValues);
        });
        setRefresh(!refresh);
      } else {
        alert("Comment must not be empty..!!");
      }
    }
  };
  useEffect(() => {
    setuserid(user && user.uid);
  }, [userid]);
  const defaultValues = {
    authorid: "",
    username: "",
    userimage: "",
    comment: "",
    date: new Date(),
  };
  const [comment, setComment] = useState(defaultValues);
  const { user } = useContext(UserContext);
  const submit_Comment = () => {
    if (comment.comment !== "") {
      submitComment(id, comment).then(() => {
        setComment(defaultValues);
      });
      setRefresh(!refresh);
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
                <img
                  className="avatar_Comment"
                  src={commment.userimage}
                  alt="comment_author"
                />
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
              <img
                className="avatar_Comment"
                src={user && user.photoURL ? user.photoURL : profilepic}
                alt="author_image"
              />
              <p>{user.displayName}</p>
            </div>

            <textarea
              // aria-label="comment"
              value={comment.comment}
              onKeyDown={handleEnter}
              className="comment_Area"
              aria-label="comment_Area"
              onChange={(e) => {
                setuserid(user && user.uid);
                setComment({
                  ...comment,
                  authorid: userid,
                  username: user && user.displayName,
                  userimage: user && user.photoURL ? user.photoURL : profilepic,
                  comment: e.target.value.replace(
                    /(?:https?|ftp):\/\/[\n\S]+/g,
                    ""
                  ),
                  date: new Date(),
                });
              }}
            />
          </div>
          <p onClick={submit_Comment} className="commentButton">
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
          </p>
        </div>
      ) : (
        <p>Login to comment on this blog</p>
      )}
    </div>
  );
};

export default Blog;
