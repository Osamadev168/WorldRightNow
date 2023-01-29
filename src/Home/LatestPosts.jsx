import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchDataLatest } from "../Api/Api";

const LatestPosts = ({ category }) => {
  const [post, setPosts] = useState([]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
        {category === "" ? <p>Latest Blogs</p> : <p>Latest in {category}</p>}
      </div>
      <Slider {...settings}>
        {post && post.length > 0 ? (
          post.map((posts, index) => {
            let date = new Date(posts.CreatedAt).toDateString();
            let displayMonth = date.substring(4, 10);
            let displayYear = date.substring(10);
            let displayDate = `${displayMonth},${displayYear}`;
            return (
              <div className="PopularCard" key={index}>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${posts.image})` }}
                ></div>
                <div className="title">
                  <h1 className="posttitle">{posts.category}</h1>
                  <div className="info">
                    <p>{displayDate}</p>

                    <p>|</p>
                    <p>4 mins read</p>
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
    </div>
  );
};

export default LatestPosts;
