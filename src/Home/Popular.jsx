import Slider from "react-slick";
import { useContext, useEffect, useRef, useState } from "react";
import { AddView, fetchPopularBlogsHome } from "../Api/Api";
import next from "../../assets/next.svg";
import prev from "../../assets/Previous.svg";
import { UserContext } from "../Context/Context";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
const Popular = ({ category }) => {
  const [blogs, setBlogs] = useState([]);
  const [laoding, setLoading] = useState(false);
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
  const getBlogs = () => {
    setLoading(true);
    fetchPopularBlogsHome(category).then((res) => {
      setBlogs(res.data);
      setLoading(false);
      if (res.data.length === 0) {
        setLoading(false);
        setMessage("No Data Available!");
      }
    });
  };
  const handleAddView = (blog) => {
    if (user.uid !== blog.authorId) {
      AddView(blog._id);
    } else if (!user) {
      AddView(blog._id);
    }
  };
  useEffect(() => {
    getBlogs();
  }, [category]);
  return (
    <motion.div
      className="mainPopularContainer"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="titleCategory">
        {category === "All" ? (
          <h3>Popular Blogs</h3>
        ) : (
          <h3>Popular in {category}</h3>
        )}
      </div>

      {laoding ? (
        <span className="loader"></span>
      ) : (
        <Slider {...settings} ref={sliderRef} className="slider">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => {
              let wordsPerMinute = 250;
              let noOfWords = blog.body.split(" ").length;
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
                <motion.article
                  className="PopularCard"
                  onClick={() => handleAddView(blog)}
                  variants={fadeIn("left", "tween", 50, index * 0.1, 0.3)}
                >
                  <a href={`/${category}/${title}/${blog._id}`} key={index}>
                    <div className="imageContainer">
                      <img
                        src={blog.image}
                        className="image"
                        loading="lazy"
                        alt="blog_Image"
                        placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmuma.ir%2Fwp-content%2Fuploads%2F2022%2F11%2F%3FND&psig=AOvVaw3RQQy1z2uVtTtbXR6VV5Ve&ust=1678208652683000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNj2rsfkx_0CFQAAAAAdAAAAABAE"
                      />
                    </div>

                    <div className="title">
                      <h3 className="posttitle">{blog.category}</h3>
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
                      <h2 className="blogtitle">{blog.title}</h2>
                      <p className="data">{blog.description}</p>
                    </div>
                  </a>
                </motion.article>
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
    </motion.div>
  );
};
export default Popular;
