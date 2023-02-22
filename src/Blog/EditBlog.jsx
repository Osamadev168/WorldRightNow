import Send from "../../assets/Send.svg";
import Upload from "../../assets/imageUpload.svg";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useContext, useEffect, useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { UserContext } from "../Context/Context";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { edit_Blog, getBlog, submitPost } from "../Api/Api";
import "../App.css";

const CreateBlog = () => {
  const blogdefaultValues = {
    title: "",
    description: "",
    body: "",
    image: "",
    category: "",
    comments: [],
    CreatedAt: new Date().toDateString,
    author: "",
    auhtorId: "",
    approved: true,
    tags: [],
  };
  const [editBlog, setEditBlog] = useState({});
  const [tags, setTags] = useState([]);
  const [data, setData] = useState(true);
  document.title = "Create Blog";
  const [progress, setProgress] = useState(false);
  const [value, setValue] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [char, setChar] = useState(0);
  const [charDescription, setCharDescription] = useState(0);
  const [activediv, setActiveDiv] = useState("");
  const [blog, setBlog] = useState({});
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  const inputFile = useRef(null);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const setApproved = () => {
    return user.uid === "Idfri64OkLcihU4YP5j2hvC14M32" ? true : false;
  };
  const params = useParams();
  const blog_id = params.blogid;
  const uploadImage = async () => {
    setProgress(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "kalo7xt1");
    await axios
      .post("https://api.cloudinary.com/v1_1/ddwvsarat/image/upload", data)
      .then((res) => {
        setBlog({ ...blog, image: res.data.url });
        setImage(res.data.url);
        sessionStorage.setItem("image", res.data.url);
      });
  };
  const getBlogData = () => {
    getBlog(blog_id).then((res) => {
      setBlog(res.data);
      setTags(res.data.tags);
    });
  };
  const submitBlog = async () => {
    try {
      setBlog({ ...blog, image: sessionStorage.getItem("image") });

      await edit_Blog(blog_id, blog).then(() => {
        navigate("/");
        setBlog(blogdefaultValues);
        sessionStorage.setItem("image", "");
      });
    } catch (e) {
      alert(e.message);
    }
  };
  const handleEnterPress = (e) => {
    if (e.key === "Enter" && value) {
      setTags([...tags, value.toLowerCase().replace(/\s+/g, "-")]);
      setBlog({ ...blog, tags: tags });
      setData(false);
      setRefresh(!refresh);
      setValue("");
    }
  };
  useEffect(() => {
    if (data) {
      getBlogData();
    }
    setBlog({ ...blog, tags: tags });

    setImage(sessionStorage.getItem("image"));
    if (file) {
      uploadImage();
    }
  }, [file, data === true, refresh === true]);

  return (
    <div
      style={{
        marginTop: 60,
        marginBottom: 80,
      }}
      className="paddingtop"
    >
      <div className="createbloginput">
        <div className="createblogformcontainer">
          <textarea
            value={blog.title ? blog.title : blog.title}
            className="titleinput"
            placeholder="Title"
            maxLength={100}
            onChange={(e) => {
              setBlog({
                ...blog,
                title: e.target.value,
                author: user.displayName,
                authorId: user.uid,
                approved: setApproved(),
              });
              setChar(e.target.value.length);
            }}
          />
          <div className="hintcontainer">
            <label className="labelcreateblog">
              Hint: Keep it short and concise
            </label>
            <label className="labelcreateblog">
              {`${char <= 100 ? char : 100}/100`}
            </label>
          </div>
        </div>
        <div></div>
        <div className="createblogformcontainer">
          <textarea
            value={blog.description}
            maxLength={250}
            className="titleinput descriptioninput"
            placeholder="Description"
            onChange={(e) => {
              setBlog({
                ...blog,
                description: e.target.value,
              });
              setCharDescription(e.target.value.length);
            }}
          />
          <div className="hintcontainer">
            <label className="labelcreateblog">
              Hint: Keep it short and concise
            </label>
            <label className="labelcreateblog">
              {`${charDescription <= 250 ? charDescription : 250}/250`}
            </label>
          </div>
        </div>
        <div className="createblogformcontainer">
          <h4 className="createblogbodytext">Body</h4>
          <CKEditor
            data={blog.body}
            editor={ClassicEditor}
            onChange={(event, editor) =>
              setBlog({ ...blog, body: editor.getData() })
            }
            config={{
              placeholder: "Start typing your blog post here...",
              mediaEmbed: { previewsInData: true },
              toolbar: [
                "Heading",
                "|",
                "Bold",
                "Italic",
                "Link",
                "NumberedList",
                "BulletedList",
                "|",
                "BlockQuote",
                "Undo",
                "Redo",
                "MediaEmbed",
              ],
            }}
          />
          <label className="labelcreateblog">
            Hint: Break the content in several parts
          </label>
        </div>
        <div>Tags</div>
        <input
          value={value}
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={handleEnterPress}
        />

        <ul>
          {tags &&
            tags.map((tag, index) => {
              return (
                <div
                  style={{ display: "flex", flexDirection: "row-reverse" }}
                  key={index}
                >
                  <button
                    onClick={() => {
                      setData(false);

                      tags.splice(tags.indexOf(tag), 1);

                      setRefresh(!refresh);
                    }}
                  >
                    <p>{tag}</p>x
                  </button>
                </div>
              );
            })}
        </ul>
        {/* {editBlog.tags.length > 0 ? (
          editBlog.tags.map((tags) => {
            return <p>{tags}</p>;
          })
        ) : (
          <></>
        )} */}
        <div>{editBlog.tags}</div>
        <div className="createblogformcontainer">
          <h4 className="createblogbodytext">Select a category</h4>

          <div className="categoriesmaindiv">
            <div className="div1categories">
              <div
                className={activediv === "div2" ? "categoryActive" : "category"}
                onClick={() => {
                  setActiveDiv("div2");
                  setBlog({ ...blog, category: "Technology" });
                }}
              >
                <a>Technology</a>
              </div>
              <div
                className={activediv === "div3" ? "categoryActive" : "category"}
                onClick={() => {
                  setActiveDiv("div3");
                  setBlog({ ...blog, category: "Sports" });
                }}
              >
                <a>Sports</a>
              </div>
              <div
                className={activediv === "div4" ? "categoryActive" : "category"}
                onClick={() => {
                  setActiveDiv("div4");
                  setBlog({ ...blog, category: "Science" });
                }}
              >
                <a>Science</a>
              </div>
              <div
                className={activediv === "div5" ? "categoryActive" : "category"}
                onClick={() => {
                  setActiveDiv("div5");
                  setBlog({ ...blog, category: "Fashion" });
                }}
              >
                <a>Fashion</a>
              </div>
              <div
                className={activediv === "div6" ? "categoryActive" : "category"}
                onClick={() => {
                  setActiveDiv("div6");
                  setBlog({ ...blog, category: "Artificial Intelligence" });
                }}
              >
                <a>Artificial Intelligence</a>
              </div>
              <div
                className={activediv === "div7" ? "categoryActive" : "category"}
                onClick={() => {
                  setActiveDiv("div7");
                  setBlog({ ...blog, category: "Forex Trading" });
                }}
              >
                <a>Forex Trading</a>
              </div>
              <div
                className={activediv === "div8" ? "categoryActive" : "category"}
                onClick={() => {
                  setActiveDiv("div8");
                  setBlog({ ...blog, category: "Politics" });
                }}
              >
                <a>Politics</a>
              </div>
              <div
                className={activediv === "div9" ? "categoryActive" : "category"}
                onClick={() => {
                  setActiveDiv("div9");
                  setBlog({ ...blog, category: "Art" });
                }}
              >
                <a>Art</a>
              </div>
              <div
                className={
                  activediv === "div10" ? "categoryActive" : "category"
                }
                onClick={() => {
                  setActiveDiv("div10");
                  setBlog({ ...blog, category: "Programming" });
                }}
              >
                <a>Programming</a>
              </div>
              <div
                className={
                  activediv === "div11" ? "categoryActive" : "category"
                }
                onClick={() => {
                  setActiveDiv("div11");
                  setBlog({ ...blog, category: "Networking" });
                }}
              >
                <a>Networking</a>
              </div>
              <div
                className={
                  activediv === "div12" ? "categoryActive" : "category"
                }
                onClick={() => {
                  setActiveDiv("div12");
                  setBlog({ ...blog, category: "Life Hacks" });
                }}
              >
                <a>Life Hacks</a>
              </div>
              <div
                className={
                  activediv === "div13" ? "categoryActive" : "category"
                }
                onClick={() => {
                  setActiveDiv("div13");
                  setBlog({ ...blog, category: "Crime" });
                }}
              >
                <a>Crime</a>
              </div>
              <div
                className={
                  activediv === "div14" ? "categoryActive" : "category"
                }
                onClick={() => {
                  setActiveDiv("div14");
                  setBlog({ ...blog, category: "Anime" });
                }}
              >
                <a>Anime</a>
              </div>
            </div>
          </div>
        </div>
        <div className="createblogformcontainer">
          {image ? (
            <div
              className="imagecontainer"
              onClick={() => {
                inputFile.current.click();
              }}
            >
              <img
                src={image}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  setProgress(true);
                }}
              />
            </div>
          ) : (
            <div
              className="imagecontainer"
              onClick={() => {
                inputFile.current.click();
              }}
            >
              {progress ? (
                <CircularProgress color="inherit" />
              ) : (
                <img src={blog.image} />
              )}

              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  setProgress(true);
                }}
              />
              <p className="uploadimagetext">Select Image</p>
              <svg
                width="100%"
                height="100%"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="100%"
                  height="100%"
                  rx="20"
                  stroke="black"
                  stroke-dasharray="20 20"
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}
        </div>
        <button
          className={"createblogbutton"}
          type="button"
          onClick={submitBlog}
        >
          <h1>Update</h1>
          <img src={Send} />
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
