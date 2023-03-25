import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { AddView, fetchDataLatest, fetchLatestBlogsHome } from "../Api/Api";
import next from "../../assets/next.svg";
import prev from "../../assets/Previous.svg";
import { CircularProgress } from "@mui/material";
const LatestPosts = ({ category }) => {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 645,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const getPosts = () => {
    setLoading(true);
    fetchLatestBlogsHome(category).then((res) => {
      setPosts(res.data);
      setLoading(false);
      if (res.data.length === 0) {
        setLoading(false);
        setMessage("No Data Available!");
      }
    });
  };
  useEffect(() => {
    getPosts();
  }, [category]);
  return (
    <div className="mainPopularContainer">
      <div className="titleCategory">
        {category === "All" ? (
          <h3>Latest Blogs</h3>
        ) : (
          <h3>Latest in {category}</h3>
        )}
      </div>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <Slider {...settings} ref={sliderRef} className="slider">
          {post && post.length > 0 ? (
            post.map((posts, index) => {
              let wordsPerMinute = 150;
              let noOfWords = posts.body.split(" ").length;
              let readingTime = noOfWords / wordsPerMinute;
              let round = Math.floor(readingTime);
              let date = new Date(posts.CreatedAt).toDateString();
              let displayMonth = date.substring(4, 10);
              let displayYear = date.substring(10);
              let displayDate = `${displayMonth},${displayYear}`;
              let title = posts.title;
              title = title.replace(/\s+/g, "-");
              return (
                <a
                  href={`/blogs/${title.replace(/[^a-zA-Z0-9 ]/g, "-")}/${
                    posts._id
                  }`}
                  key={index}
                >
                  <article
                    className="PopularCard"
                    onClick={() => AddView(posts._id)}
                  >
                    <div className="imageContainer">
                      <img
                        src={posts.image}
                        className="image"
                        loading="lazy"
                        alt="blog_Image"
                        placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmuma.ir%2Fwp-content%2Fuploads%2F2022%2F11%2F%3FND&psig=AOvVaw3RQQy1z2uVtTtbXR6VV5Ve&ust=1678208652683000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNj2rsfkx_0CFQAAAAAdAAAAABAE"
                      />
                    </div>

                    <div className="title">
                      <h3 className="posttitle">{posts.category}</h3>
                      <div className="info">
                        <time pubdate="pubdate">{displayDate}</time>
                        <p>&nbsp;|&nbsp;</p>
                        {round <= 0 ? (
                          <p>Quick read</p>
                        ) : (
                          <p>{round} mins read</p>
                        )}
                      </div>
                    </div>
                    <div className="description">
                      <h2 className="blogtitle">{posts.title}</h2>
                      <p className="data">{posts.description}</p>
                    </div>
                  </article>
                </a>
              );
            })
          ) : (
            <p>{message}</p>
          )}
        </Slider>
      )}
      <div className="sliderButtons">
        <div
          className="prevButton"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img src={prev} alt="button" />
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="nextButton"
        >
          <img src={next} alt="button" />
        </div>
      </div>
    </div>
  );
};
export default LatestPosts;
