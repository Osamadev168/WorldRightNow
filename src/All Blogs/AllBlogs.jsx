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
            <img
              className="blogImage"
              src={BlogImage}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "15px",
              }}
            />
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
              <span className="type">Trending</span>
            </div>
          </div>
          <div className="sliderDots">
            <div className="dot activeDot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="tagsContainerMain">
          <div className="tagsLeft">
            <div className="blogsContainer">
              <article
                // key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <a className="blogCard">
                  <div className="blogCardLeftWrapper">
                    <div className="blogCardLeft">
                      <div className="blogDateandReadTime">
                        <p>Jan 19, 2023</p>
                        <p>&nbsp;|&nbsp;</p>
                        <p>4 mins read</p>
                      </div>
                      <div className="titleandDescriptionImage">
                        <h1 className="blogTitle">
                          10 Breakthrough Technologies Changing Our World
                        </h1>
                        <p className="blogDescription">
                          Explore 10 cutting-edge technologies shaping our
                          world: AI, biotechnology, quantum computing, IoT,
                          VR/AR, 5G, robotics, blockchain, renewable energy, &
                          3D printing. Learn...
                        </p>
                      </div>
                    </div>
                    <img
                      className="blogImage"
                      src={BlogImage}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="blog-Image"
                    />
                  </div>

                  <div className="imageAuthorName">
                    <img
                      src={profilepic}
                      className="auhtorImage"
                      alt="author-image"
                    />
                    <p className="authorName">Daniyal Habib</p>
                    <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                    <p className="blogCategory">Technology</p>
                  </div>
                </a>
              </article>
              <article
                // key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <a className="blogCard">
                  <div className="blogCardLeftWrapper">
                    <div className="blogCardLeft">
                      <div className="blogDateandReadTime">
                        <p>Jan 19, 2023</p>
                        <p>&nbsp;|&nbsp;</p>
                        <p>4 mins read</p>
                      </div>
                      <div className="titleandDescriptionImage">
                        <h1 className="blogTitle">
                          10 Breakthrough Technologies Changing Our World
                        </h1>
                        <p className="blogDescription">
                          Explore 10 cutting-edge technologies shaping our
                          world: AI, biotechnology, quantum computing, IoT,
                          VR/AR, 5G, robotics, blockchain, renewable energy, &
                          3D printing. Learn...
                        </p>
                      </div>
                    </div>
                    <img
                      className="blogImage"
                      src={BlogImage}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="blog-Image"
                    />
                  </div>

                  <div className="imageAuthorName">
                    <img
                      src={profilepic}
                      className="auhtorImage"
                      alt="author-image"
                    />
                    <p className="authorName">Daniyal Habib</p>
                    <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                    <p className="blogCategory">Technology</p>
                  </div>
                </a>
              </article>
              <article
                // key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <a className="blogCard">
                  <div className="blogCardLeftWrapper">
                    <div className="blogCardLeft">
                      <div className="blogDateandReadTime">
                        <p>Jan 19, 2023</p>
                        <p>&nbsp;|&nbsp;</p>
                        <p>4 mins read</p>
                      </div>
                      <div className="titleandDescriptionImage">
                        <h1 className="blogTitle">
                          10 Breakthrough Technologies Changing Our World
                        </h1>
                        <p className="blogDescription">
                          Explore 10 cutting-edge technologies shaping our
                          world: AI, biotechnology, quantum computing, IoT,
                          VR/AR, 5G, robotics, blockchain, renewable energy, &
                          3D printing. Learn...
                        </p>
                      </div>
                    </div>
                    <img
                      className="blogImage"
                      src={BlogImage}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="blog-Image"
                    />
                  </div>

                  <div className="imageAuthorName">
                    <img
                      src={profilepic}
                      className="auhtorImage"
                      alt="author-image"
                    />
                    <p className="authorName">Daniyal Habib</p>
                    <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                    <p className="blogCategory">Technology</p>
                  </div>
                </a>
              </article>
              <article
                // key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <a className="blogCard">
                  <div className="blogCardLeftWrapper">
                    <div className="blogCardLeft">
                      <div className="blogDateandReadTime">
                        <p>Jan 19, 2023</p>
                        <p>&nbsp;|&nbsp;</p>
                        <p>4 mins read</p>
                      </div>
                      <div className="titleandDescriptionImage">
                        <h1 className="blogTitle">
                          10 Breakthrough Technologies Changing Our World
                        </h1>
                        <p className="blogDescription">
                          Explore 10 cutting-edge technologies shaping our
                          world: AI, biotechnology, quantum computing, IoT,
                          VR/AR, 5G, robotics, blockchain, renewable energy, &
                          3D printing. Learn...
                        </p>
                      </div>
                    </div>
                    <img
                      className="blogImage"
                      src={BlogImage}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="blog-Image"
                    />
                  </div>

                  <div className="imageAuthorName">
                    <img
                      src={profilepic}
                      className="auhtorImage"
                      alt="author-image"
                    />
                    <p className="authorName">Daniyal Habib</p>
                    <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                    <p className="blogCategory">Technology</p>
                  </div>
                </a>
              </article>
              <article
                // key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <a className="blogCard">
                  <div className="blogCardLeftWrapper">
                    <div className="blogCardLeft">
                      <div className="blogDateandReadTime">
                        <p>Jan 19, 2023</p>
                        <p>&nbsp;|&nbsp;</p>
                        <p>4 mins read</p>
                      </div>
                      <div className="titleandDescriptionImage">
                        <h1 className="blogTitle">
                          10 Breakthrough Technologies Changing Our World
                        </h1>
                        <p className="blogDescription">
                          Explore 10 cutting-edge technologies shaping our
                          world: AI, biotechnology, quantum computing, IoT,
                          VR/AR, 5G, robotics, blockchain, renewable energy, &
                          3D printing. Learn...
                        </p>
                      </div>
                    </div>
                    <img
                      className="blogImage"
                      src={BlogImage}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="blog-Image"
                    />
                  </div>

                  <div className="imageAuthorName">
                    <img
                      src={profilepic}
                      className="auhtorImage"
                      alt="author-image"
                    />
                    <p className="authorName">Daniyal Habib</p>
                    <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                    <p className="blogCategory">Technology</p>
                  </div>
                </a>
              </article>
              <article
                // key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <a className="blogCard">
                  <div className="blogCardLeftWrapper">
                    <div className="blogCardLeft">
                      <div className="blogDateandReadTime">
                        <p>Jan 19, 2023</p>
                        <p>&nbsp;|&nbsp;</p>
                        <p>4 mins read</p>
                      </div>
                      <div className="titleandDescriptionImage">
                        <h1 className="blogTitle">
                          10 Breakthrough Technologies Changing Our World
                        </h1>
                        <p className="blogDescription">
                          Explore 10 cutting-edge technologies shaping our
                          world: AI, biotechnology, quantum computing, IoT,
                          VR/AR, 5G, robotics, blockchain, renewable energy, &
                          3D printing. Learn...
                        </p>
                      </div>
                    </div>
                    <img
                      className="blogImage"
                      src={BlogImage}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="blog-Image"
                    />
                  </div>

                  <div className="imageAuthorName">
                    <img
                      src={profilepic}
                      className="auhtorImage"
                      alt="author-image"
                    />
                    <p className="authorName">Daniyal Habib</p>
                    <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                    <p className="blogCategory">Technology</p>
                  </div>
                </a>
              </article>
              <article
                // key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <a className="blogCard">
                  <div className="blogCardLeftWrapper">
                    <div className="blogCardLeft">
                      <div className="blogDateandReadTime">
                        <p>Jan 19, 2023</p>
                        <p>&nbsp;|&nbsp;</p>
                        <p>4 mins read</p>
                      </div>
                      <div className="titleandDescriptionImage">
                        <h1 className="blogTitle">
                          10 Breakthrough Technologies Changing Our World
                        </h1>
                        <p className="blogDescription">
                          Explore 10 cutting-edge technologies shaping our
                          world: AI, biotechnology, quantum computing, IoT,
                          VR/AR, 5G, robotics, blockchain, renewable energy, &
                          3D printing. Learn...
                        </p>
                      </div>
                    </div>
                    <img
                      className="blogImage"
                      src={BlogImage}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="blog-Image"
                    />
                  </div>

                  <div className="imageAuthorName">
                    <img
                      src={profilepic}
                      className="auhtorImage"
                      alt="author-image"
                    />
                    <p className="authorName">Daniyal Habib</p>
                    <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                    <p className="blogCategory">Technology</p>
                  </div>
                </a>
              </article>
              <article
                // key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <a className="blogCard">
                  <div className="blogCardLeftWrapper">
                    <div className="blogCardLeft">
                      <div className="blogDateandReadTime">
                        <p>Jan 19, 2023</p>
                        <p>&nbsp;|&nbsp;</p>
                        <p>4 mins read</p>
                      </div>
                      <div className="titleandDescriptionImage">
                        <h1 className="blogTitle">
                          10 Breakthrough Technologies Changing Our World
                        </h1>
                        <p className="blogDescription">
                          Explore 10 cutting-edge technologies shaping our
                          world: AI, biotechnology, quantum computing, IoT,
                          VR/AR, 5G, robotics, blockchain, renewable energy, &
                          3D printing. Learn...
                        </p>
                      </div>
                    </div>
                    <img
                      className="blogImage"
                      src={BlogImage}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="blog-Image"
                    />
                  </div>

                  <div className="imageAuthorName">
                    <img
                      src={profilepic}
                      className="auhtorImage"
                      alt="author-image"
                    />
                    <p className="authorName">Daniyal Habib</p>
                    <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                    <p className="blogCategory">Technology</p>
                  </div>
                </a>
              </article>
              <article
                // key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <a className="blogCard">
                  <div className="blogCardLeftWrapper">
                    <div className="blogCardLeft">
                      <div className="blogDateandReadTime">
                        <p>Jan 19, 2023</p>
                        <p>&nbsp;|&nbsp;</p>
                        <p>4 mins read</p>
                      </div>
                      <div className="titleandDescriptionImage">
                        <h1 className="blogTitle">
                          10 Breakthrough Technologies Changing Our World
                        </h1>
                        <p className="blogDescription">
                          Explore 10 cutting-edge technologies shaping our
                          world: AI, biotechnology, quantum computing, IoT,
                          VR/AR, 5G, robotics, blockchain, renewable energy, &
                          3D printing. Learn...
                        </p>
                      </div>
                    </div>
                    <img
                      className="blogImage"
                      src={BlogImage}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="blog-Image"
                    />
                  </div>

                  <div className="imageAuthorName">
                    <img
                      src={profilepic}
                      className="auhtorImage"
                      alt="author-image"
                    />
                    <p className="authorName">Daniyal Habib</p>
                    <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                    <p className="blogCategory">Technology</p>
                  </div>
                </a>
              </article>
              <article
                // key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <a className="blogCard">
                  <div className="blogCardLeftWrapper">
                    <div className="blogCardLeft">
                      <div className="blogDateandReadTime">
                        <p>Jan 19, 2023</p>
                        <p>&nbsp;|&nbsp;</p>
                        <p>4 mins read</p>
                      </div>
                      <div className="titleandDescriptionImage">
                        <h1 className="blogTitle">
                          10 Breakthrough Technologies Changing Our World
                        </h1>
                        <p className="blogDescription">
                          Explore 10 cutting-edge technologies shaping our
                          world: AI, biotechnology, quantum computing, IoT,
                          VR/AR, 5G, robotics, blockchain, renewable energy, &
                          3D printing. Learn...
                        </p>
                      </div>
                    </div>
                    <img
                      className="blogImage"
                      src={BlogImage}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="blog-Image"
                    />
                  </div>

                  <div className="imageAuthorName">
                    <img
                      src={profilepic}
                      className="auhtorImage"
                      alt="author-image"
                    />
                    <p className="authorName">Daniyal Habib</p>
                    <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                    <p className="blogCategory">Technology</p>
                  </div>
                </a>
              </article>
              <article
                // key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <a className="blogCard">
                  <div className="blogCardLeftWrapper">
                    <div className="blogCardLeft">
                      <div className="blogDateandReadTime">
                        <p>Jan 19, 2023</p>
                        <p>&nbsp;|&nbsp;</p>
                        <p>4 mins read</p>
                      </div>
                      <div className="titleandDescriptionImage">
                        <h1 className="blogTitle">
                          10 Breakthrough Technologies Changing Our World
                        </h1>
                        <p className="blogDescription">
                          Explore 10 cutting-edge technologies shaping our
                          world: AI, biotechnology, quantum computing, IoT,
                          VR/AR, 5G, robotics, blockchain, renewable energy, &
                          3D printing. Learn...
                        </p>
                      </div>
                    </div>
                    <img
                      className="blogImage"
                      src={BlogImage}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt="blog-Image"
                    />
                  </div>

                  <div className="imageAuthorName">
                    <img
                      src={profilepic}
                      className="auhtorImage"
                      alt="author-image"
                    />
                    <p className="authorName">Daniyal Habib</p>
                    <p>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</p>
                    <p className="blogCategory">Technology</p>
                  </div>
                </a>
              </article>
            </div>
          </div>
          <div className="tagsRight">
            <div className="scrollContainer">
              <div className="searchContainer">
                <input
                  type="text"
                  className="searchField"
                  placeholder="Search"
                />
                <i>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                  <span className="category categoryActive">Popular</span>
                  <span className="category">Latest</span>
                </div>
              </div>
              <div className="categoryContainer">
                <p>Category:</p>
                <div className="categories">
                  <span className="category categoryActive">All</span>
                  <span className="category">Technology</span>
                  <span className="category">Science</span>
                  <span className="category">Education</span>
                  <span className="category">Finance</span>
                  <span className="category">Lifestyle</span>
                  <span className="category">Business</span>
                  <span className="category">News</span>
                  <span className="category">Travel</span>
                  <span className="category">Sports</span>
                  <span className="category">Health</span>
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
