import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { fetchDataLatest } from "../Api/Api";
import next from "../../assets/next.svg";
import prev from "../../assets/Previous.svg";
import { useNavigate } from "react-router-dom";
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
    fetchDataLatest(category).then((res) => {
      setPosts(res.data);
    });
  };
  useEffect(() => {
    getPosts();
  }, [category]);
  return (
    <div className="mainPopularContainer">
      <div className="titleCategory">
        {category === "" ? (
          <h3>Latest Blogs</h3>
        ) : (
          <h3>Latest in {category}</h3>
        )}
      </div>
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
            return (
              <div
                className="PopularCard"
                key={index}
                onClick={() => navigate(`/blogs/blog/${posts._id}`)}
              >
                <div
                  className="image"
                  style={{ backgroundImage: `url(${posts.image})` }}
                ></div>
                <div className="title">
                  <h1 className="posttitle">{posts.category}</h1>
                  <div className="info">
                    <p>{displayDate}</p>
                    <p>&nbsp;|&nbsp;</p>
                    {round <= 0 ? <p>Quick read</p> : <p>{round}mins read</p>}
                  </div>
                </div>
                <div className="description">
                  <p className="blogtitle">{posts.title}</p>
                  <p className="data">{posts.description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <>No data is available for this Category</>
        )}
      </Slider>
      <div className="sliderButtons">
        <div
          className="prevButton"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img src={prev} />
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="nextButton"
        >
          <img src={next} />
        </div>
      </div>
    </div>
  );
};
export default LatestPosts;
