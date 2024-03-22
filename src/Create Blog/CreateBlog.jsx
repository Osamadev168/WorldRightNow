import Send from "../../assets/Send.svg";
import React from "react";
import Upload from "../../assets/imageUpload.svg";
import { useContext, useEffect, useRef, useState, lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { UserContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { saveUserDraft, submitPost, updateDraft, upload_Image } from "../Api/Api";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "ckeditor5-custom-build/build/ckeditor";

const CreateBlog = () => {
  // document title
  document.title = "Create Blog | HubbleFeed";
  ////
  // hooks and other stuff
  const { user, token } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const blogdefaultValues = {
    postID: "",
    title: "",
    description: "",
    body: "",
    image: "",
    category: "",
    comments: [],
    CreatedAt: new Date(),
    author: "",
    authorImage: "",
    auhtorId: "",
    tags: [],
  };

  const [progress, setProgress] = useState(false);
  const [titleSave , setTitleSave] = useState(false);
  const [bodySave , setBodySave] = useState(false);
  const [descriptionSave  , setDescriptionSave] = useState(false);
  const [tags, setTags] = useState([]);
  const [blogDescription , SetBlogDescription] = useState("")
  const [value, setValue] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [char, setChar] = useState(0);
  const [charTags, setCharTags] = useState(0);
  const [charDescription, setCharDescription] = useState(0);
  const [activediv, setActiveDiv] = useState("");
  const [blog, setBlog] = useState(blogdefaultValues);
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  const [bodyLength, setBodyLength] = useState(0);
  const [indicator , setIndicator] = useState(false)
  const inputFile = useRef(null);
  const navigate = useNavigate();
  ///
  // upload adapter
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("image", file);
            upload_Image(body)
              .then((res) => {
                resolve({
                  default: res.data.secure_url,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  ///
  // configuration options
  const options = {
    extraPlugins: [uploadPlugin],
    placeholder: "Start typing your blog post here...",
    mediaEmbed: { previewsInData: true },
    wordCount: {
      onUpdate: (stats) => {
        setBodyLength(stats.words);
      },
    },
    link: {
      decorators: {
        NewTab: {
          mode: "manual",
          label: "Open in new tab",
          attributes: {
            target: "_blank",
          },
        },
        isExternal: {
          mode: "manual",
          label: "No follow",
          attributes: {
            rel: "nofollow",
          },
        },

        Dofollow: {
          mode: "manual",
          label: "Do follow",
          attributes: {},
        },

        Sponsored: {
          mode: "manual",
          label: "Sponsored",

          attributes: {
            rel: "sponsored",
          },
        },
      },
    },
  };
  //

  // upload feature image
  const uploadImage = async () => {
    setProgress(true);
    const data = new FormData();
    data.append("image", file);
    upload_Image(data).then((res) => {
      setBlog({
        ...blog,
        image: res.data.secure_url,
        CreatedAt: new Date(),
        tags: tags,
      });
      setImage(res.data.secure_url);
      sessionStorage.setItem("image", res.data.secure_url);
    });
  };
  ////
  /// submit blog
  const submitBlog = async () => {
    setLoading(true);

    try {
      await submitPost(blog, token).then(async () => {
        setBlog(blogdefaultValues);
        sessionStorage.setItem("image", "");
        setLoading(false);
        navigate("/dashboard");
      });
    } catch (e) {
      alert(e.message);
      setLoading(false);
    }
  };
  ///
  /// event handlers functions
  const handleEnterPress = (e) => {
    if (e.key === "Enter" && value && tags.length < 10) {
      setTags([...tags, value.toLowerCase().trim().replace(/\s+/g, "-")]);
      setBlog({ ...blog, tags: tags });
      setRefresh(!refresh);
      setValue("");
      setCharTags(0);
    }
  };
  const handleTitleChange = (e) => {
    setBlog({
      ...blog,
      title: e.target.value,
      authorId: user.uid,
    

    });
    setChar(e.target.value.length);
  };
  const handleDescriptionChange = (e) => {
    setBlog({
      ...blog,
      description: e.target.value,
      author: user.displayName,
      authorImage: user.photoURL,
      authorId: user.uid,
    });
    setCharDescription(e.target.value.length);
    SetBlogDescription(e.target.value);
  };
  const handleBodyChange = (event, editor) => {
    setBlog({ ...blog, body: editor.getData() });
  };
  const handleActiveDiv = (category) => {
    return activediv === category ? "categoryActive" : "category";
  };
  const handleCategoryChange = (category) => {
    setActiveDiv(category);
    setBlog({ ...blog, category: category });
  };
  const handleTagChange = (e) => {
    setValue(e.target.value);
    setCharTags(e.target.value.length);
  };
  const handleTagRemove = (tag) => {
    tags.splice(tags.indexOf(tag), 1);
    setRefresh(!refresh);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setProgress(true);
  };
  const saveProgress = async () => {
    try {
      let response;
      if (blog.postID) {
        response = await updateDraft(blog , blog.postID);
        console.log("Draft updated:", response);
        setTitleSave(false)
        setBodySave(false)
        setDescriptionSave(false)
      } else {
        response = await saveUserDraft(blog);
        console.log("Draft saved:", response);
        const postId = response.postID;
        blog.postID = postId;
        setTitleSave(false)
        setBodySave(false)
        setDescriptionSave(false)      }
    } catch (error) {
      console.error(`Error saving post: ${error.message}`);
    }
  };
  
  useEffect(() => {

    setBlog({ ...blog, tags: tags });
    if (tags) {
      setBlog({ ...blog, tags: tags });
    }
    setImage(sessionStorage.getItem("image"));
    if (file) {
      uploadImage();
    }
  }, [file, refresh, tags]);

  const getDescriptionValue = () =>
   {
     if (blogDescription === "")
      {
        return blog.description
      }
      else {
        return blogDescription
      }
   }
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
            onBlur={() => 
              {
                saveProgress()
                setTitleSave(true)
              }}
            className="titleinput"
            placeholder="Title"
            maxLength={100}
            onChange={handleTitleChange}
            required
          />
          <div className="hintcontainer">
            <label className="labelcreateblog">
              Hint: Keep it short and concise
            </label>
            <label className="labelcreateblog">
              {`${char <= 100 ? char : 100}/100`}
            </label>
            <label>
              {titleSave === true ? "Saved" : ""}
            </label>
          </div>
        </div>
        <div className="createblogformcontainer">
          <textarea
          onBlur={() => 
            {
              saveProgress()
              setDescriptionSave(true)
            }}
            value={blogDescription}
            maxLength={300}
            className="titleinput descriptioninput"
            placeholder="Description"
            onChange={handleDescriptionChange}
          />
          <div className="hintcontainer">
            <label className="labelcreateblog">
              Hint: Keep it short and descriptive
            </label>
            <label className="labelcreateblog">
              {`${charDescription <= 300 ? charDescription : 300}/300`}
            </label>
            <label>
              {descriptionSave === true ? "Saved" : ""}
            </label>
          </div>
        </div>
        <div className="createblogformcontainer">
          <label className="createblogbodytext" htmlFor="blogBody">
            Body
          </label>
         <Suspense fallback={<div>Loading...</div>}>
      <div onKeyUp={
        () => 
        {
          saveProgress()
          setBodySave(true)
        }
      }>
        <CKEditor
          data={blog.body}
          editor={ClassicEditor}
          onChange={handleBodyChange}
          config={options}
        />
      </div>
    </Suspense>
          <label className="labelcreateblog">
            Hint: Break the content in several parts
          </label>
          <label className="labelcreateblog">
            Total Words So far {bodyLength}
          </label>
          <label>
              {bodySave === true ? "Saved" : ""}
            </label>
        </div>
        <div className="createblogformcontainer">
          <h4 className="createblogbodytext">Select a category</h4>
          <div className="categoriesmaindiv">
            <div className="div1categories">
              <div
                className={handleActiveDiv("Technology")}
                onClick={() => handleCategoryChange("Technology")}
              >
                <a>Technology</a>
              </div>
              <div
                className={handleActiveDiv("Sports")}
                onClick={() => handleCategoryChange("Sports")}
              >
                <a>Sports</a>
              </div>
              <div
                className={handleActiveDiv("Science")}
                onClick={() => handleCategoryChange("Science")}
              >
                <a>Science</a>
              </div>
              <div
                className={handleActiveDiv("Fashion")}
                onClick={() => handleCategoryChange("Fashion")}
              >
                <a>Fashion</a>
              </div>
              <div
                className={handleActiveDiv("Artificial Intelligence")}
                onClick={() => handleCategoryChange("Artificial Intelligence")}
              >
                <a>Artificial Intelligence</a>
              </div>
              <div
                className={handleActiveDiv("Health")}
                onClick={() => handleCategoryChange("Health")}
              >
                <a>Health</a>
              </div>
              <div
                className={activediv === "div8" ? "categoryActive" : "category"}
                onClick={() => {
                  setActiveDiv("div8");
                  setBlog({ ...blog, category: "News" });
                }}
              >
                <a>News</a>
              </div>
              <div
                className={handleActiveDiv("Gaming")}
                onClick={() => handleCategoryChange("Gaming")}
              >
                <a>Gaming</a>
              </div>
              <div
                className={handleActiveDiv("Programming")}
                onClick={() => handleCategoryChange("Programming")}
              >
                <a>Programming</a>
              </div>
              <div
                className={handleActiveDiv("General")}
                onClick={() => handleCategoryChange("General")}
              >
                <a>General</a>
              </div>
              <div
                className={handleActiveDiv("LifeHacks")}
                onClick={() => handleCategoryChange("LifeHacks")}
              >
                <a>Life Hacks</a>
              </div>
              <div
                className={handleActiveDiv("Education")}
                onClick={() => handleCategoryChange("Education")}
              >
                <a>Education</a>
              </div>
              <div
                className={handleActiveDiv("Travel")}
                onClick={() => handleCategoryChange("Travel")}
              >
                <a>Anime</a>
              </div>
            </div>
          </div>
        </div>
        <div className="createblogformcontainer tagssectioncontainer">
          <div className="container1">
            <label className="createblogbodytext" htmlFor="addTags">
              Add Tags (press enter to add a tag)
            </label>
            <input
              className="titleinput tagsinput"
              value={value}
              type="text"
              onChange={handleTagChange}
              onKeyDown={handleEnterPress}
              maxLength={30}
              required
              id="addTags"
            />
            <div className="hintcontainer">
              <label className="labelcreateblog">
                Hint: Keep the tags relevant to the blog
              </label>
              <label className="labelcreateblog">
                {`${charTags <= 30 ? charTags : 30}/30`}
              </label>
            </div>
          </div>
          <div className="container2">
            {tags.length > 0 ? (
              <h4 className="createblogbodytext">Added Tags</h4>
            ) : (
              <></>
            )}

            <div className="tagscontainer">
              {tags.length > 0 ? (
                tags.map((tag, index) => {
                  return (
                    <div
                      className="tag"
                      onClick={() => handleTagRemove(tag)}
                      key={index}
                    >
                      {tag}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.26009 1.87437C9.3351 1.80199 9.39494 1.7154 9.43613 1.61965C9.47731 1.5239 9.49901 1.4209 9.49997 1.31668C9.50092 1.21245 9.48111 1.10907 9.44169 1.01258C9.40226 0.916092 9.34402 0.82842 9.27035 0.754682C9.19668 0.680943 9.10906 0.622615 9.01261 0.5831C8.91616 0.543585 8.8128 0.523675 8.70857 0.524531C8.60434 0.525387 8.50133 0.546993 8.40554 0.588087C8.30975 0.629182 8.2231 0.688942 8.15065 0.76388L5.00444 3.90904L1.85928 0.76388C1.78742 0.686757 1.70076 0.624898 1.60447 0.581994C1.50818 0.53909 1.40423 0.51602 1.29883 0.51416C1.19343 0.512301 1.08874 0.53169 0.990991 0.57117C0.893247 0.61065 0.804457 0.669414 0.729916 0.743954C0.655376 0.818495 0.596612 0.907285 0.557132 1.00503C0.517651 1.10277 0.498263 1.20747 0.500122 1.31287C0.501982 1.41827 0.525052 1.52221 0.567956 1.6185C0.61086 1.71479 0.672719 1.80146 0.749842 1.87332L3.89291 5.01953L0.747749 8.16469C0.60909 8.3135 0.533603 8.51031 0.537191 8.71368C0.540779 8.91704 0.623162 9.11107 0.766985 9.2549C0.910807 9.39872 1.10484 9.4811 1.3082 9.48469C1.51157 9.48828 1.70838 9.41279 1.85719 9.27413L5.00444 6.12897L8.14961 9.27518C8.29841 9.41384 8.49523 9.48932 8.69859 9.48574C8.90196 9.48215 9.09599 9.39977 9.23981 9.25594C9.38363 9.11212 9.46602 8.91809 9.4696 8.71472C9.47319 8.51136 9.39771 8.31454 9.25905 8.16574L6.11598 5.01953L9.26009 1.87437Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  );
                })
              ) : (
                <div>
                  <h4 className="createblogbodytext">Added Tags</h4>
                  <p className="notags">Not Tags added yet</p>
                </div>
              )}
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
                onChange={handleFileChange}
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
                <img src={Upload} />
              )}

              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={handleFileChange}
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
          className={
            blog.title === "" ||
            blog.description === "" ||
            blog.body === "" ||
            blog.category === ""
              ? "createblogbutton2"
              : "createblogbutton"
          }
          disabled={
            blog.title === "" ||
            blog.description === "" ||
            blog.body === "" ||
            blog.category === ""
              ? true
              : false
          }
          type="button"
          onClick={submitBlog}
        >
          {loading ? (
            <span className="loader"></span>
          ) : (
            <>
              <h1>Submit</h1>
              <img src={Send} />
            </>
          )}
        </button>
        <button className="createblogbutton" onClick={saveProgress}>
          Save as a Draft
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
