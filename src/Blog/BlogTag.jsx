import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBlogsfromTag } from "../Api/Api";
import image from "../../assets/1.jpg";
import { Helmet } from "react-helmet";

const BlogTag = () => {
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const tag = params.tags;
  const getData = () => {
    getBlogsfromTag(tag).then((res) => {
      setBlogs(res.data);
      const blogtags = res.data.reduce(
        (accumulator, obj) => [...accumulator, ...obj.tags],
        []
      );
      let unique = [...new Set(blogtags)];
      setTags(unique);
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [tag]);
  return (
    <div className="TagsContainerParent paddingtop">
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content={`Explore a wealth of information on ${tag} with [Website Name]. Our curated collection of articles and blog posts provides insights and expertise on all aspects of ${tag}. Stay up-to-date with the latest trends and ideas in ${tag} by browsing our comprehensive resources today.`}
        />
        <title>Explore</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h4 className="blogsContaining">
        Blogs Containing
        <span>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.625 6.25C21.1223 6.25 21.5992 6.05246 21.9508 5.70083C22.3025 5.34919 22.5 4.87228 22.5 4.375C22.5 3.87772 22.3025 3.40081 21.9508 3.04917C21.5992 2.69754 21.1223 2.5 20.625 2.5C20.1277 2.5 19.6508 2.69754 19.2992 3.04917C18.9475 3.40081 18.75 3.87772 18.75 4.375C18.75 4.87228 18.9475 5.34919 19.2992 5.70083C19.6508 6.05246 20.1277 6.25 20.625 6.25ZM0.7375 11.975L11.9875 0.725C12.4375 0.275 13.0625 0 13.75 0H22.5C23.8875 0 25 1.1125 25 2.5V11.25C25 11.9375 24.725 12.5625 24.2625 13.0125L13.025 24.2625C12.5625 24.7125 11.9375 25 11.25 25C10.5625 25 9.9375 24.7125 9.4875 24.2625L0.7375 15.5125C0.275 15.0625 0 14.4375 0 13.75C0 13.05 0.2875 12.425 0.7375 11.975Z"
              fill="#140421"
            />
          </svg>
          <h3>{tag}</h3>
        </span>
      </h4>
      <div className="tagsContainerMain">
        <div className="tagsLeft">
          <div className="blogsContainer">
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
                      href={`/blogs/${title.replace(/[^a-zA-Z0-9 ]/g, "-")}/${
                        blog._id
                      }`}
                      className="blogCard"
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
              <></>
            )}
          </div>
        </div>
        <div className="tagsRight">
          <div className="scrollContainer">
            <h6 className="blogsContaining totalBlogs">
              Total Blogs
              <span>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 5.5C16.8978 5.5 17.2794 5.34196 17.5607 5.06066C17.842 4.77936 18 4.39782 18 4C18 3.60218 17.842 3.22064 17.5607 2.93934C17.2794 2.65804 16.8978 2.5 16.5 2.5C16.1022 2.5 15.7206 2.65804 15.4393 2.93934C15.158 3.22064 15 3.60218 15 4C15 4.39782 15.158 4.77936 15.4393 5.06066C15.7206 5.34196 16.1022 5.5 16.5 5.5ZM0.59 10.08L9.59 1.08C9.95 0.72 10.45 0.5 11 0.5H18C19.11 0.5 20 1.39 20 2.5V9.5C20 10.05 19.78 10.55 19.41 10.91L10.42 19.91C10.05 20.27 9.55 20.5 9 20.5C8.45 20.5 7.95 20.27 7.59 19.91L0.59 12.91C0.22 12.55 0 12.05 0 11.5C0 10.94 0.23 10.44 0.59 10.08Z"
                    fill="#140421"
                  />
                </svg>

                <h5>{blogs && blogs.length}</h5>
              </span>
            </h6>
            <div className="blogTags">
              <h6 className="totalBlogs relatedTags">Related Tags</h6>
              <div className="tagsContainer">
                {tags && tags.length > 0 ? (
                  tags.slice(0, 11).map((tag, index) => {
                    return (
                      <a
                        className="tag"
                        href={`/blog/${tag.replace(/\s+/g, "-")}`}
                      >
                        {tag}
                      </a>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogTag;
