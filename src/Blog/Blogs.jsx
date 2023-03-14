import { useEffect } from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllBlogs } from "../Api/Api";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [end, setEnd] = useState(false);
  const getBlogs = (page, number) => {
    getAllBlogs(page, number).then((res) => {
      setBlogs(res.data);
    });
  };
  const loadProducts = () => {
    setPage(page + 1);
    setTimeout(() => {
      getAllBlogs(page, limit).then((res) => {
        setBlogs((prev) => [...prev, ...res.data]);
        if (res.data.length === 0) {
          setEnd(true);
        } else {
          setEnd(false);
        }
      });
      console.log(blogs.length, page, limit);
    }, 4000);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogs(0, 10);
  }, []);
  return (
    <div style={{ margin: 100 }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs</title>
        <link rel="canonical" href="/all/blogs" />
      </Helmet>
      <h1 style={{ margin: 20 }}>Read Blogs</h1>

      <InfiniteScroll
        dataLength={blogs.length}
        next={loadProducts}
        hasMore={!end}
        loader={
          <Skeleton
            animation="wave"
            variant="rectangular"
            style={{ width: "100%", height: 200 }}
          />
        }
        endMessage={end ? <p>asla;sd</p> : <></>}
      >
        {blogs && blogs.length > 0 ? (
          blogs.map((blog, index) => {
            let wordsPerMinute = 150;
            let noOfWords = blog.body.split(" ").length;
            let readingTime = noOfWords / wordsPerMinute;
            let round = Math.floor(readingTime);
            let date = new Date(blog.CreatedAt).toDateString();
            let displayMonth = date.substring(4, 10);
            let displayYear = date.substring(10);
            let displayDate = `${displayMonth},${displayYear}`;
            let title = blog.title;
            title = title.replace(/\s+/g, "-");
            return (
              <div
                className="blogCard"
                key={index}
                onClick={() =>
                  navigate(
                    `/blogs/${title.replace(/[^a-zA-Z0-9 ]/g, "-")}/${blog._id}`
                  )
                }
                style={{
                  cursor: "pointer",
                }}
              >
                <div className="blogCardLeft">
                  <div className="blogDateandReadTime">
                    <p>{displayDate}</p>
                    <p>&nbsp;|&nbsp;</p>
                    {round <= 0 ? <p>Quick read</p> : <p>{round}mins read</p>}
                  </div>
                  <div className="titleandDescriptionImage">
                    <h1 className="blogTitle">{blog.title}</h1>
                    <p className="blogDescription">{blog.description}</p>
                    <div className="imageAuthorName">
                      <img src={blog.authorImage} className="auhtorImage" />
                      <p className="authorName">{blog.author}</p>
                      <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                      <p className="blogCategory">{blog.category}</p>
                    </div>
                  </div>
                  <img
                    className="blogImage"
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: 400,
                    }}
                    src={blog.image}
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </InfiniteScroll>
    </div>
  );
};

export default Blogs;

const PopularBlogs = () => {
  return <Blogs />;
};
