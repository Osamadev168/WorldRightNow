import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchDataLatest } from "../Api/Api";
import next from "../../assets/next.svg";
import prev from "../../assets/Previous.svg";
import { Grid } from "@mui/material";
import { useRef } from "react";

const LatestPosts = ({ category }) => {
  const [post, setPosts] = useState([]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    arrows: false,
  };
  const getPosts = () => {
    fetchDataLatest(category).then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    getPosts();
  }, [category]);
  const sliderRef = useRef(null);

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
            let date = new Date(posts.CreatedAt).toDateString();
            let displayMonth = date.substring(4, 10);
            let displayYear = date.substring(10);
            let displayDate = `${displayMonth},${displayYear}`;
            return (
              <Grid container>
                <div className="PopularCard" key={index}>
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${posts.image})` }}
                  ></div>
                  <div className="title">
                    <h1 className="posttitle">{posts.category}</h1>
                    <div className="info">
                      <p>{displayDate}</p>

                      <p>&nbsp;|&nbsp;</p>
                      <p>4 mins read</p>
                    </div>
                  </div>
                  <div className="description">
                    <p className="blogtitle">{posts.title}</p>
                    <p className="data">{posts.description}</p>
                  </div>
                </div>
              </Grid>
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
