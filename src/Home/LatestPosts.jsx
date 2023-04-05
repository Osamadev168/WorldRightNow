import Slider from "react-slick";
import { useContext, useEffect, useRef, useState } from "react";
import { AddView, fetchLatestBlogsHome } from "../Api/Api";
import next from "../../assets/next.svg";
import prev from "../../assets/Previous.svg";
import { UserContext } from "../Context/Context";
const LatestPosts = ({ category }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const sliderRef = useRef(null);
  const { user } = useContext(UserContext);
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
      setBlogs(res.data);
      setLoading(false);
      if (res.data.length === 0) {
        setLoading(false);
        setMessage("No Data Available!");
      }
    });
  };
  const handleAddView = (blogs) => {
    if (user.uid !== blogs.authorId) {
      AddView(blogs._id);
    } else if (!user) {
      AddView(blogs._id);
    }
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
          {blogs && blogs.length > 0 ? (
            blogs.map((blogs, index) => {
              let wordsPerMinute = 150;
              let noOfWords = blogs.body.split(" ").length;
              let readingTime = noOfWords / wordsPerMinute;
              let round = Math.floor(readingTime);
              let date = new Date(blogs.CreatedAt).toDateString();
              let displayMonth = date.substring(4, 10);
              let displayYear = date.substring(10);
              let displayDate = `${displayMonth},${displayYear}`;
              let title = blogs.title;
              title = title.replace(/\s+/g, "-");
              title = title.replace(/[^a-zA-Z0-9 ]/g, "-");
              let category = blogs.category;
              category = category.replace(/\s+/g, "-");
              return (
                <article
                  className="PopularCard"
                  onClick={() => handleAddView(blogs)}
                >
                  <a href={`/${category}/${title}/${blogs._id}`} key={index}>
                    <div className="imageContainer">
                      <img
                        src={blogs.image}
                        className="image"
                        loading="lazy"
                        alt="blog_Image"
                        placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmuma.ir%2Fwp-content%2Fuploads%2F2022%2F11%2F%3FND&psig=AOvVaw3RQQy1z2uVtTtbXR6VV5Ve&ust=1678208652683000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNj2rsfkx_0CFQAAAAAdAAAAABAE"
                      />
                    </div>

                    <div className="title">
                      <h3 className="posttitle">{blogs.category}</h3>
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
                      <h2 className="blogtitle">{blogs.title}</h2>
                      <p className="data">{blogs.description}</p>
                    </div>
                  </a>
                </article>
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
