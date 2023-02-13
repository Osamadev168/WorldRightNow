import Send from "../../assets/Send.svg";
import Upload from "../../assets/imageUpload.png";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-decoupled-document";

import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../Context/Context";
import axios from "axios";
import { submitPost } from "../Api/Api";
import Footer from "../Home/Footer";
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
  const toolBarRef = useRef(null);
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
        sessionStorage.setItem("image", "");
        setBlog(blogdefaultValues);
        alert("Blog submitted!");
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
      }}
    >
      <div className="createbloginput">
        <div className="createblogformcontainer">
          <input
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <label className="labelcreateblog">
              Hint: Keep it short and concise
            </label>
            <label className="labelcreateblog">
              Characters remaining {`${char <= 100 ? char : 100}/100`}
            </label>
          </div>
        </div>
        <div className="createblogformcontainer">
          <input
            value={blog.description}
            maxLength={200}
            className="titleinput"
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <label className="labelcreateblog">
              Hint: Keep it short and concise
            </label>
            <label className="labelcreateblog">
              Characters remaining
              {`${charDescription <= 200 ? charDescription : 200}/200`}
            </label>
          </div>
        </div>
        <div className="createblogformcontainer">
          <h1 className="createblogbodytext">Body</h1>

          <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) =>
              setBlog({ ...blog, body: editor.getData() })
            }
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);

              // Insert the toolbar before the editable area.
              editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                );

              this.editor = editor;
            }}
            config={{
              placeholder: "Start typing your blog post here...",
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
                "imageResize",
              ],
            }}
            data={blog.data}
          />

          <label className="labelcreateblog">
            Hint: Break the content in several parts
          </label>
        </div>
        <div className="createblogformcontainer">
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
                  setBlog({ ...blog, category: "AI" });
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
            </div>
            <div className="div2categories">
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
                  width: 927,
                  height: 240,
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
            </div>
          )}
        </div>
        <div className="createblogbutton" onClick={submitBlog}>
          <h1>Submit</h1>
          <img src={Send} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlog;
