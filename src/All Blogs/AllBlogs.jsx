import { useRef, useState } from "react";
import { useEffect } from "react";
import {
  fetchDataLatest,
  fetchDataPopular,
  getAllBlogs,
  getBlogsForSlider,
  SearchBlogs,
} from "../Api/Api";
import Slider from "react-slick";
// import { stepLabelClasses } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "@mui/material";
const AllBlogs = () => {
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const [sliderBlogs, setSliderBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState("");
  const [activediv, setActiveDiv] = useState("Popular");
  const [error, setError] = useState("");
  const [popular, setPopular] = useState(false);
  const [loading, setLoading] = useState(false);
  const [latest, setLatest] = useState(false);
  const [currentSilde, setCurrentSlide] = useState(0);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [end, setEnd] = useState(false);
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    draggable: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (current) => setCurrentSlide(current),
    slidesToScroll: 1,
    arrows: false,
    fade: true,
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
  const getSliderData = () => {
    getBlogsForSlider().then((res) => {
      setSliderBlogs(res.data);
    });
  };
  const getBlogs = (page, number) => {
    getAllBlogs(page, number).then((res) => {
      setBlogs(res.data);
    });
  };
  const loadProducts = () => {
    setPage(page + 1);
    setTimeout(() => {
      getAllBlogs(page, limit, category).then((res) => {
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
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      // setLatest(false);
      setLoading(true);
      setSearch(true);
      setQuery(value);
      setCategory("");
      setValue("");
      setActiveDiv("");
    }
  };
  const handleClick = () => {
    setLoading(true);
    setSearch(true);
    setQuery(value);
    setCategory("");
    setValue("");
  };
  const handlePopular = () => {
    setSearch(false);
    // setLoading(true);
    setLatest(false);
    setCategory("");
    setPopular(!popular);
    // getBlogsPopular("");
    setActiveDiv("Popular");
  };
  const handleLatest = () => {
    setCategory("");
    // getBlogsPopular("");
    setSearch(false);

    setLatest(true);
    setActiveDiv("Latest");
  };
  const getDataLatest = () => {
    setLoading(true);
    setLatest(true);
    setQuery("");
    fetchDataLatest(0, 10, category).then((res) => {
      setBlogs(res.data);
      setLoading(false);
      if (res.data.length === 0) {
        setError("No Blogs Found in this category:(");
      }
    });
  };
  const getBlogsPopular = () => {
    setLoading(true);
    setQuery("");
    fetchDataPopular(0, 10, category).then((res) => {
      setBlogs(res.data);
      setLoading(false);
      if (res.data.length === 0) {
        setError("No Blogs Found in this category:(");
      }
    });
  };
  const Search = () => {
    SearchBlogs(query).then((res) => {
      setEnd(true);

      setBlogs(res.data);
      setLoading(false);
      setSearch(false);
      if (res.data.length === 0) {
        setError("No Blogs Found");
        setSearch(false);
      }
    });
  };
  useEffect(() => {
    getSliderData();
    // if (!query || category) {
    //   if (!latest) {
    //     getBlogsPopular();
    //   }
    //   if (latest) {
    //     getDataLatest();
    //   }
    // }

    if (latest) {
      if (category && !search) {
        setLoading(true);
        fetchDataLatest(0, 10, category).then((res) => {
          setBlogs(res.data);
          setLoading(false);
          if (res.data.length === 0) {
            setError("no blogs found in this category");
            setEnd(true);
          }
        });
      } else if (!search) {
        fetchDataLatest(0, 10, "").then((res) => {
          setBlogs(res.data);
          if (res.data.length === 0) {
            setError("no blogs found in this category");
            setEnd(true);
          }
        });
      }
    } else if (!latest) {
      if (category && !search) {
        setLoading(true);

        fetchDataPopular(0, 10, category).then((res) => {
          setBlogs(res.data);
          setLoading(false);

          if (res.data.length === 0) {
            setError("NOT FOUND");
            setEnd(true);
          }
        });
      } else if (!search) {
        setLoading(true);
        fetchDataPopular(0, 10, "").then((res) => {
          setBlogs(res.data);
          setLoading(false);

          if (res.data.length === 0) {
            setError("NOT FOUND");
            setEnd(true);
          }
        });
      }
    }

    // if (category) {
    //   getBlogs(0, 10, category);
    // }
    window.scrollTo(0, 0);
    // getBlogs(0, 10, "");
    if (query && search) {
      Search();
    }
  }, [query, category, latest, popular]);
  return (
    <>
      <div className="AllBlogsContainer paddingtop">
        <Slider {...settings} ref={sliderRef} className="slider">
          {sliderBlogs && sliderBlogs.length > 0 ? (
            sliderBlogs.map((blog, index) => {
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
                <div className="heroSlideshow">
                  <div className="slide" key={index}>
                    <img
                      className="blogImage"
                      src={blog.image}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "15px",
                      }}
                    />
                    <div className="blogInfo">
                      <div className="info">
                        <p>{displayDate}</p>
                        <p>&nbsp;|&nbsp;</p>
                        <p>{round}</p>
                      </div>
                      <div className="blogTitleDescription">
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                      </div>
                      <div className="imageAuthorName">
                        <img src={blog.authorImage} className="auhtorImage" />
                        <p className="authorName">{blog.author}</p>
                        <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                        <p className="blogCategory">{blog.category}</p>
                      </div>
                    </div>
                    <div className="blogType">
                      <span className="type">Trending</span>
                    </div>
                  </div>
                  <div className="sliderDots">
                    <div
                      className={currentSilde === 0 ? "dot activeDot" : "dot"}
                      onClick={() => {
                        sliderRef.current.slickGoTo(0);
                      }}
                    ></div>
                    <div
                      className={currentSilde === 1 ? "dot activeDot" : "dot"}
                      onClick={() => {
                        sliderRef.current.slickGoTo(1);
                      }}
                    ></div>
                    <div
                      className={currentSilde === 2 ? "dot activeDot" : "dot"}
                      onClick={() => {
                        sliderRef.current.slickGoTo(2);
                      }}
                    ></div>
                    <div
                      className={currentSilde === 3 ? "dot activeDot" : "dot"}
                      onClick={() => {
                        sliderRef.current.slickGoTo(3);
                      }}
                    ></div>
                    <div
                      className={currentSilde === 4 ? "dot activeDot" : "dot"}
                      onClick={() => {
                        sliderRef.current.slickGoTo(4);
                      }}
                    ></div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <span className="loader"></span>
            </div>
          )}
        </Slider>
        <div className="tagsContainerMain">
          <div className="tagsLeft">
            <div className="blogsContainer">
              <div>
                {query && !category && search ? (
                  <p>Search Results about {query}</p>
                ) : (
                  <></>
                )}
              </div>
              {!loading ? (
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
                  endMessage={end ? <p></p> : <></>}
                >
                  <div>
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
                          <article
                            key={index}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            <a
                              className="blogCard"
                              href={`/blogs/${title.replace(
                                /[^a-zA-Z0-9 ]/g,
                                "-"
                              )}/${blog._id}`}
                            >
                              <div className="blogCardLeftWrapper">
                                <div className="blogCardLeft">
                                  <div className="blogDateandReadTime">
                                    <p>{displayDate}</p>
                                    <p>&nbsp;|&nbsp;</p>
                                    {round <= 0 ? (
                                      <p>Quick read</p>
                                    ) : (
                                      <p>{round}mins read</p>
                                    )}
                                  </div>
                                  <div className="titleandDescriptionImage">
                                    <h1 className="blogTitle">{blog.title}</h1>
                                    <p className="blogDescription">
                                      {blog.description}
                                    </p>
                                  </div>
                                </div>
                                <img
                                  className="blogImage"
                                  src={blog.image}
                                  style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                  }}
                                  alt="blog-Image"
                                />
                              </div>

                              <div className="imageAuthorName">
                                <img
                                  src={blog.authorImage}
                                  className="auhtorImage"
                                  alt="author-image"
                                />
                                <p className="authorName">{blog.author}</p>
                                <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                                <p className="blogCategory">{blog.category}</p>
                              </div>
                            </a>
                          </article>
                        );
                      })
                    ) : (
                      <p>{error}</p>
                    )}
                  </div>
                </InfiniteScroll>
              ) : (
                <span className="loader"></span>
              )}
            </div>
          </div>
          <div className="tagsRight">
            <div className="scrollContainer">
              <div className="searchContainer">
                <input
                  type="text"
                  className="searchField"
                  placeholder="Search"
                  onKeyDown={handleEnter}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <i>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={handleClick}
                  >
                    <path
                      d="M12.8175 11.9041L10.4074 9.51166C11.3429 8.34433 11.7959 6.86266 11.6734 5.37132C11.5508 3.87997 10.8619 2.49231 9.74838 1.49365C8.63484 0.494996 7.18129 -0.0387395 5.6866 0.00219149C4.19192 0.0431225 2.76971 0.655609 1.71241 1.71371C0.655111 2.77181 0.0430898 4.1951 0.00218982 5.69092C-0.0387101 7.18675 0.49462 8.6414 1.49252 9.75578C2.49041 10.8702 3.87703 11.5596 5.36724 11.6822C6.85745 11.8049 8.33799 11.3515 9.50444 10.4153L11.895 12.8077C11.9554 12.8686 12.0273 12.917 12.1064 12.95C12.1856 12.983 12.2705 13 12.3562 13C12.442 13 12.5269 12.983 12.6061 12.95C12.6852 12.917 12.7571 12.8686 12.8175 12.8077C12.9346 12.6865 13 12.5245 13 12.3559C13 12.1873 12.9346 12.0253 12.8175 11.9041ZM5.8601 10.4153C4.96073 10.4153 4.08156 10.1484 3.33376 9.64837C2.58596 9.14832 2.00312 8.43759 1.65895 7.60605C1.31477 6.77451 1.22472 5.85951 1.40018 4.97675C1.57564 4.09399 2.00873 3.28312 2.64468 2.64669C3.28063 2.01025 4.09088 1.57684 4.97297 1.40124C5.85506 1.22565 6.76937 1.31577 7.60028 1.66021C8.43119 2.00464 9.14138 2.58792 9.64104 3.33629C10.1407 4.08466 10.4074 4.9645 10.4074 5.86455C10.4074 7.07149 9.92831 8.22899 9.07553 9.08242C8.22274 9.93585 7.06612 10.4153 5.8601 10.4153Z"
                      fill="#263238"
                    />
                  </svg>
                </i>
              </div>
              <div className="sortContainer">
                <p>Sort By:</p>
                <div className="categories">
                  <span
                    className={
                      activediv === "Popular" ? "categoryActive" : "category"
                    }
                    onClick={handlePopular}
                  >
                    Popular
                  </span>
                  <span
                    className={
                      activediv === "Latest" ? "categoryActive" : "category"
                    }
                    onClick={handleLatest}
                  >
                    Latest
                  </span>
                </div>
              </div>
              <div className="categoryContainer">
                <p>Category:</p>
                <div className="categories">
                  <span
                    className={
                      activediv === "div1" ? "categoryActive" : "category"
                    }
                    onClick={() => {
                      setActiveDiv("div1");
                      setCategory("");
                      setSearch(false);
                    }}
                  >
                    All
                  </span>
                  <span
                    className={
                      activediv === "div2" ? "categoryActive" : "category"
                    }
                    onClick={() => {
                      setActiveDiv("div2");
                      setCategory("Technology");
                      setSearch(false);
                    }}
                  >
                    Technology
                  </span>
                  <div
                    className={
                      activediv === "div3" ? "categoryActive" : "category"
                    }
                    onClick={() => {
                      setActiveDiv("div3");
                      setCategory("Science");
                      setSearch(false);
                    }}
                  >
                    Science
                  </div>
                  <span
                    className={
                      activediv === "div4" ? "categoryActive" : "category"
                    }
                    onClick={() => {
                      setActiveDiv("div4");
                      setCategory("Education");
                      setSearch(false);
                    }}
                  >
                    Education
                  </span>
                  <span
                    className={
                      activediv === "div5" ? "categoryActive" : "category"
                    }
                    onClick={() => {
                      setActiveDiv("div5");
                      setCategory("Finance");
                      setSearch(false);
                    }}
                  >
                    Finance
                  </span>
                  <span
                    className={
                      activediv === "div6" ? "categoryActive" : "category"
                    }
                    onClick={() => {
                      setActiveDiv("div6");
                      setCategory("LifeStyle");
                      setSearch(false);
                    }}
                  >
                    Lifestyle
                  </span>
                  <span
                    className={
                      activediv === "div7" ? "categoryActive" : "category"
                    }
                    onClick={() => {
                      setActiveDiv("div7");
                      setCategory("Business");
                      setSearch(false);
                    }}
                  >
                    Business
                  </span>
                  <span
                    className={
                      activediv === "div8" ? "categoryActive" : "category"
                    }
                    onClick={() => {
                      setActiveDiv("div8");
                      setCategory("News");
                      setSearch(false);
                    }}
                  >
                    News
                  </span>
                  <span
                    className={
                      activediv === "div9" ? "categoryActive" : "category"
                    }
                    onClick={() => {
                      setActiveDiv("div9");
                      setCategory("Travel");
                      setSearch(false);
                    }}
                  >
                    Travel
                  </span>
                  <span
                    className={
                      activediv === "div10" ? "categoryActive" : "category"
                    }
                    onClick={() => {
                      setActiveDiv("div10");
                      setCategory("Sports");
                      setSearch(false);
                    }}
                  >
                    Sports
                  </span>
                  <span
                    className={
                      activediv === "div11" ? "categoryActive" : "category"
                    }
                    onClick={() => {
                      setActiveDiv("div11");
                      setCategory("Health");
                      setSearch(false);
                    }}
                  >
                    Health
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllBlogs;

const Latest = () => {};
