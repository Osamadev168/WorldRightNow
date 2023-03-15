import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { fetchDataLatest } from "../Api/Api";
import next from "../../assets/next.svg";
import prev from "../../assets/Previous.svg";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
const LatestPosts = ({ category }) => {
  const [post, setPosts] = useState([]);
  const navigate = useNavigate();
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
    fetchDataLatest(category, 0, 10).then((res) => {
      setPosts(res.data);
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
      {post.length < 0 ? (
        <CircularProgress />
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
                >
                  <div
                    className="PopularCard"
                    key={index}
                    onClick={() =>
                      navigate(
                        `/blogs/${title.replace(/[^a-zA-Z0-9 ]/g, "-")}/${
                          posts._id
                        }`
                      )
                    }
                  >
                    <img
                      src={posts.image}
                      className="image"
                      loading="lazy"
                      alt="blog_image"
                    />
                    <div className="title">
                      <h1 className="posttitle">{posts.category}</h1>
                      <div className="info">
                        <p>{displayDate}</p>
                        <p>&nbsp;|&nbsp;</p>
                        {round <= 0 ? (
                          <p>Quick read</p>
                        ) : (
                          <p>{round}mins read</p>
                        )}
                      </div>
                    </div>
                    <div className="description">
                      <p className="blogtitle">{posts.title}</p>
                      <p className="data">{posts.description}</p>
                    </div>
                  </div>
                </a>
              );
            })
          ) : (
            <div>
              <span className="loader"></span>
            </div>
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
