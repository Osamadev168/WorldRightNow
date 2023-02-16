import Send from "../../assets/Send.svg";
import Upload from "../../assets/imageUpload.svg";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { useContext, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../Context/Context";
import axios from "axios";
import { submitPost } from "../Api/Api";
import "../App.css";
const blogdefaultValues = {
  title: "",
  description: "",
  body: "",
  image: "",
  category: "",
  comments: [],
  CreatedAt: new Date(),
  author: "",
  auhtorId: "",
  approved: true,
};
const CreateBlog = () => {
  const [char, setChar] = useState(0);
  const [charDescription, setCharDescription] = useState(0);
  const [activediv, setActiveDiv] = useState("");
  const [blog, setBlog] = useState(blogdefaultValues);
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  const inputFile = useRef(null);
  const { user } = useContext(UserContext);
  const uploadImage = async () => {
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

  const submitBlog = async () => {
    try {
      await submitPost(blog).then(() => {
        setBlog(blogdefaultValues);
        sessionStorage.setItem("image", "");
        toast("Blog Submitted :)");
      });
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    setImage(sessionStorage.getItem("image"));
    if (file) {
      uploadImage();
    }
  }, [file]);

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
            value={blog.title}
            className="titleinput"
            placeholder="Title"
            maxLength={100}
            onChange={(e) => {
              setBlog({
                ...blog,
                title: e.target.value,
                author: user.displayName,
                authorId: user.uid,
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
        <div>
          <ToastContainer />
        </div>
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
                CreatedAt: new Date(),
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
            onReady={(editor) => {
              editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                );
            }}
            config={{
              placeholder: "Start typing your blog post here...",
              mediaEmbed: { previewsInData: true },
              toolbar: [
                "imageInsert",
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
                "imageResize",
                "MediaEmbed",
              ],
            }}
          />
          <label className="labelcreateblog">
            Hint: Break the content in several parts
          </label>
        </div>
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
              <img src={Upload} />
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={(e) => {
                  setFile(e.target.files[0]);
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
        <div className="createblogbutton" onClick={submitBlog}>
          <h1>Submit</h1>
          <img src={Send} />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
