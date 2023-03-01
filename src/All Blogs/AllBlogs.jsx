import { useState } from "react";
import Categories from "../Home/Categories";
import LatestPosts from "../Home/LatestPosts";
import Popular from "../Home/Popular";
import BlogImage from "../../assets/1.jpg";
import profilepic from "../../assets/profilepic.jpg";

const AllBlogs = () => {
  const [category, setCategory] = useState("");
  window.scrollTo(0, 0);
  return (
    <>
      <div className="AllBlogsContainer paddingtop">
        <div className="heroSlideshow">
          <div className="slide">
            <div
              className="blogImage"
              style={{
                backgroundImage: `url(${BlogImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
              }}
            ></div>
            <div className="blogInfo">
              <div className="info">
                <p>Jan 19, 2023</p>
                <p>&nbsp;|&nbsp;</p>
                <p>4 mins read</p>
              </div>
              <div className="blogTitleDescription">
                <h2>10 Breakthrough Technologies Changing Our World</h2>
                <p>
                  Explore 10 cutting-edge technologies shaping our world: AI,
                  biotechnology, quantum computing, IoT, VR/AR, 5G, robotics,
                  blockchain, renewable energy, & 3D printing. Learn how these
                  advancements are transforming society & improving our daily
                  lives.
                </p>
              </div>
              <div className="imageAuthorName">
                <img src={profilepic} className="auhtorImage" />
                <p className="authorName">Daniyal Habib</p>
                <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                <p className="blogCategory">Technology</p>
              </div>
            </div>
            <div className="blogType">
              <span className="type">Popular Today</span>
            </div>
          </div>
        </div>
        <Categories setCategory={setCategory} />
        <Popular category={category} />
        <LatestPosts category={category} />
      </div>
    </>
  );
};
export default AllBlogs;
