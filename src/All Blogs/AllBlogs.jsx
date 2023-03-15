import { useRef, useState } from "react";
import { useEffect } from "react";
import {
  AddView,
  fetchDataLatest,
  fetchDataPopular,
  getBlogsForSlider,
  SearchBlogs,
} from "../Api/Api";
import Slider from "react-slick";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "@mui/material";
import { Helmet } from "react-helmet";
const AllBlogs = () => {
  const [category, setCategory] = useState("All");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Popular");
  const [search, setSearch] = useState(false);
  const [sliderBlogs, setSliderBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState("");
  const [categoryChange, setCategoryChange] = useState(false);
  const [activediv, setActiveDiv] = useState("Popular");
  const [error, setError] = useState("");
  const [popular, setPopular] = useState(true);
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
  const loadDataPopular = () => {
    setPage(page + 1);
    setTimeout(() => {
      fetchDataPopular(category, page, limit).then((res) => {
        setBlogs((prev) => [...prev, ...res.data]);
        if (res.data.length === 0) {
          setEnd(true);
        } else {
          setEnd(false);
        }
      });
    }, 1000);
    console.log(page, blogs.length);
  };
  const loadDataLatest = () => {
    setPage(page + 1);

    setTimeout(() => {
      fetchDataLatest(category, page, limit).then((res) => {
        setBlogs((prev) => [...prev, ...res.data]);
        if (res.data.length === 0) {
          setEnd(true);
        } else {
          setEnd(false);
        }
      });
    }, 1000);
  };
  const getDataForCategory = () => {
    if (latest) {
      setLoading(true);
      fetchDataLatest(category, page, limit).then((res) => {
        setBlogs(res.data);
        setPage(page + 1);
        if (res.data.length === 0) {
          setError("No Blogs Found");
          setEnd(true);
        } else {
          setEnd(false);
        }
        setLoading(false);
      });
    } else if (popular) {
      setLoading(true);
      fetchDataPopular(category, page, limit).then((res) => {
        setBlogs(res.data);
        setPage(page + 1);

        if (res.data.length === 0) {
          setEnd(true);
        } else {
          setEnd(false);
        }
        setLoading(false);
      });
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setLatest(false);
      setPopular(false);
      setLoading(true);
      setSearch(true);
      setQuery(value);
      setCategory("");
      setValue("");
      setActiveDiv("");
      setType("");
    }
  };
  const handleClick = () => {
    setLatest(false);
    setPopular(false);
    setLoading(true);
    setSearch(true);
    setQuery(value);
    setCategory("");
    setType("");

    setValue("");
  };
  const handlePopular = () => {
    setPopular(true);
    setPage(0);
    setCategory("All");
    setCategoryChange(false);
    setActiveDiv("");
    setBlogs([]);
    setSearch(false);
    setLatest(false);
    setType("Popular");
  };
  const handleLatest = () => {
    setLatest(true);
    setCategoryChange(false);
    setSearch(false);
    setPopular(false);
    setBlogs([]);
    setCategory("All");

    setPage(0);
    setType("Latest");
    setActiveDiv("");
  };
  const handleCategoryChange = (category, div) => {
    setPage(0);
    setBlogs([]);
    setCategoryChange(true);
    setCategory(category);
    setActiveDiv(div);
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
  const getPopularData = () => {
    setLoading(true);
    fetchDataPopular(category, page, limit).then((res) => {
      setBlogs(res.data);
      if (res.data.length === 0) {
        setEnd(true);
      } else {
        setEnd(false);
      }
      setLoading(false);
    });
  };
  const getLatestData = () => {
    setLoading(true);
    fetchDataLatest(category, page, limit).then((res) => {
      setBlogs(res.data);
      if (res.data.length === 0) {
        setEnd(true);
      } else {
        setEnd(false);
      }
      setLoading(false);
    });
  };
  useEffect(() => {
    getSliderData();
    if (popular && !categoryChange) {
      getPopularData();
    }
    if (latest && !categoryChange) {
      getLatestData();
    }
    window.scrollTo(0, 0);
    if (categoryChange || category) {
      getDataForCategory();
      console.log(categoryChange, category);
    }
    if (query && search) {
      Search();
    }
    console.log(categoryChange, category);
  }, [query, categoryChange, popular, latest, category]);
  return (
    <>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Explore whats happening around you"
        />
        <title>Blogs | Hubble Feed</title>

        <link rel="canonical" href="/all/blogs" />
      </Helmet>
      <div className="AllBlogsContainer paddingtop">
        <Slider {...settings} ref={sliderRef} className="slider">
          {sliderBlogs && sliderBlogs.length > 0 ? (
            sliderBlogs.map((blog, index) => {
              let wordsPerMinute = 150;
              let noOfWords = blog && blog.body.split(" ").length;
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
                  next={latest ? loadDataLatest : loadDataPopular}
                  hasMore={!end}
                  loader={<Skeleton height={200} />}
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
                            onClick={() => AddView(blog._id)}
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
                      type === "Popular"
                        ? "category categoryActive"
                        : "category"
                    }
                    onClick={handlePopular}
                  >
                    Popular
                  </span>
                  <span
                    className={
                      type === "Latest" ? "category categoryActive" : "category"
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
                      activediv === "div1"
                        ? "category categoryActive"
                        : "category"
                    }
                    onClick={() => handleCategoryChange("All", "div1")}
                  >
                    All
                  </span>
                  <span
                    className={
                      activediv === "div2"
                        ? "category categoryActive"
                        : "category"
                    }
                    onClick={() => handleCategoryChange("Technology", "div2")}
                  >
                    Technology
                  </span>
                  <div
                    className={
                      activediv === "div3"
                        ? "category categoryActive"
                        : "category"
                    }
                    onClick={() => handleCategoryChange("Science", "div3")}
                  >
                    Science
                  </div>
                  <span
                    className={
                      activediv === "div4"
                        ? "category categoryActive"
                        : "category"
                    }
                    onClick={() => handleCategoryChange("Education", "div4")}
                  >
                    Education
                  </span>
                  <span
                    className={
                      activediv === "div5"
                        ? "category categoryActive"
                        : "category"
                    }
                    onClick={() => handleCategoryChange("Finance", "div5")}
                  >
                    Finance
                  </span>
                  <span
                    className={
                      activediv === "div6"
                        ? "category categoryActive"
                        : "category"
                    }
                    onClick={() => handleCategoryChange("Lifestyle", "div6")}
                  >
                    Lifestyle
                  </span>
                  <span
                    className={
                      activediv === "div7"
                        ? "category categoryActive"
                        : "category"
                    }
                    onClick={() => handleCategoryChange("Business", "div7")}
                  >
                    Business
                  </span>
                  <span
                    className={
                      activediv === "div8"
                        ? "category categoryActive"
                        : "category"
                    }
                    onClick={() => handleCategoryChange("News", "div8")}
                  >
                    News
                  </span>
                  <span
                    className={
                      activediv === "div9"
                        ? "category categoryActive"
                        : "category"
                    }
                    onClick={() => handleCategoryChange("Travel", "div9")}
                  >
                    Travel
                  </span>
                  <span
                    className={
                      activediv === "div10" ? "categoryActive" : "category"
                    }
                    onClick={() => handleCategoryChange("Sports", "div10")}
                  >
                    Sports
                  </span>
                  <span
                    className={
                      activediv === "div11"
                        ? "category categoryActive"
                        : "category"
                    }
                    onClick={() => handleCategoryChange("Health", "div11")}
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
