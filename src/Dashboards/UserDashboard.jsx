import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePostUser, getUserPosts } from "../Api/Api";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import moment from "moment";
import profilepic from "../../assets/Avatar.svg";
import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { useRef } from "react";
import { updateProfile } from "firebase/auth";
import axios from "axios";
const UserDashboard = () => {
  document.title = "Dashboard";
  const { user } = useContext(UserContext);
  const [change, setChange] = useState(false);
  const [progress, setProgress] = useState(false);
  const [refresh, setRefreh] = useState(false);
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const inputFile = useRef(null);
  const editName = useRef(null);
  const [userdata, setUserData] = useState({});
  const [file, setFile] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const authorId = params.authorId;
  const [blog, setBlog] = useState([]);
  const getData = () => {
    getUserPosts(authorId).then((res) => {
      setBlog(res.data);
    });
  };
  const handleYesDailog = () => {
    deletePostUser(id).then(() => {
      setOpen(false);
      setRefreh(!refresh);
    });
  };
  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "kalo7xt1");
    await axios
      .post("https://api.cloudinary.com/v1_1/ddwvsarat/image/upload", data)
      .then(async (res) => {
        updateProfile(user, {
          photoURL: res.data.url,
        }).then(() => {
          axios.put(`http://localhost:7000/blog/update`, {
            authorId: user.uid,
            authorName: user.displayName,
            authorImage: user.photoURL,
          });
          axios.post("http://localhost:7000/blog/update/comments", {
            authorId: user.uid,
            authorName: user.displayName,
            authorImage: user.photoURL,
          });
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        });
      });
  };
  const setUser = () => {
    setUserData({
      ...userdata,
      name: user && user.displayName,
      image: user && user.photoURL,
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setUser();
    getData();
    console.log(user);

    if (file) {
      uploadImage();
    }
  }, [refresh, file]);
  return (
    <div className="dashboardContainer paddingtop">
      <div className="userSettingContainer">
        <div className="userInfo">
          <div
            className="profilePic"
            style={{
              backgroundImage: `url(${
                user && user.photoURL.includes("googleusercontent")
                  ? profilepic
                  : user.photoURL
              })`,
            }}
            onClick={() => {
              inputFile.current.click();
            }}
          >
            {!progress ? (
              <div className="imageEditButton">
                <input
                  ref={inputFile}
                  type="file"
                  style={{ display: "none" }}
                  id="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setProgress(true);
                  }}
                />
                <p>Edit</p>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7725 3.14373C14.0758 2.84044 14.0758 2.33495 13.7725 2.04722L11.9528 0.227468C11.665 -0.0758228 11.1596 -0.0758228 10.8563 0.227468L9.42536 1.6506L12.3416 4.56687M0 11.0837V14H2.91626L11.5173 5.3912L8.60103 2.47493L0 11.0837Z"
                    fill="white"
                  />
                </svg>
              </div>
            ) : (
              <div className="circularProgress">
                <CircularProgress />
              </div>
            )}
          </div>
          <div className="userCredentialContainer">
            <div className="userNameContainer">
              <p>Username: </p>
              <input
                ref={editName}
                type="text"
                className="userName"
                value={change === true ? user.name : user && user.displayName}
                onChange={(e) => {
                  setChange(true);
                  setEdit(true);
                  setUserData({ ...userdata, name: e.target.value.trim() });
                }}
              />
              <div className="userNameButton">
                {edit ? (
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      setChange(true);
                      updateProfile(user, {
                        displayName: userdata.name,
                      }).then(() => {
                        alert("User name changed!");
                        setEdit(false);
                        axios.put(`http://localhost:7000/blog/update`, {
                          authorId: user.uid,
                          authorName: user.displayName,
                          authorImage: user.photoURL,
                        });
                        axios.post(
                          "http://localhost:7000/blog/update/comments",
                          {
                            authorId: user.uid,
                            authorName: user.displayName,
                            authorImage: user.photoURL,
                          }
                        );
                      });
                    }}
                  >
                    <path
                      d="M5.7713 9.96861L15.296 0.443946C15.5919 0.147981 15.9686 0 16.426 0C16.8834 0 17.2601 0.147981 17.5561 0.443946C17.852 0.73991 18 1.11659 18 1.57399C18 2.03139 17.852 2.40807 17.5561 2.70404L6.90134 13.3587C6.57847 13.6816 6.20179 13.843 5.7713 13.843C5.34081 13.843 4.96413 13.6816 4.64126 13.3587L0.443946 9.16144C0.147981 8.86547 0 8.48879 0 8.03139C0 7.57399 0.147981 7.19731 0.443946 6.90134C0.73991 6.60538 1.11659 6.4574 1.57399 6.4574C2.03139 6.4574 2.40807 6.60538 2.70404 6.90134L5.7713 9.96861Z"
                      fill="black"
                    />
                  </svg>
                ) : (
                  <></>
                )}
                {!edit ? (
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      editName.current.focus();
                    }}
                  >
                    <path
                      d="M17.71 4.0425C18.1 3.6525 18.1 3.0025 17.71 2.6325L15.37 0.2925C15 -0.0975 14.35 -0.0975 13.96 0.2925L12.12 2.1225L15.87 5.8725M0 14.2525V18.0025H3.75L14.81 6.9325L11.06 3.1825L0 14.2525Z"
                      fill="black"
                    />
                  </svg>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="userEmailContainer">
              <p>Email: </p>
              <p className="userEmail">{user && user.email}</p>
            </div>
          </div>
        </div>
        <div className="totalBlogsContainer">
          <h5>Total Blogs</h5>
          <h4 className="totalBlogs">{blog && blog.length}</h4>
        </div>
      </div>
      <h3 className="dashboardTitle">Your Blogs</h3>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deleting Blog"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this blog?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>No</Button>
          <Button onClick={handleYesDailog}>Yes</Button>
        </DialogActions>
      </Dialog>
      {blog.length > 0 ? (
        blog.map((blogs, index) => {
          let wordsPerMinute = 150;
          let noOfWords = blogs.body.split(" ").length;
          let readingTime = noOfWords / wordsPerMinute;
          let round = Math.floor(readingTime);
          let blog_status = blogs.approved === true ? true : false;
          let title = blogs.title;
          title = title.replace(/\s+/g, "-");
          return (
            <div className="blogsContainer" key={index}>
              <div className="blogCard">
                <div className="blogInfo">
                  <div
                    className="blogTitleDescription"
                    onClick={() =>
                      navigate(
                        `/blogs/${title.replace(/[^a-zA-Z0-9 ]/g, "-")}/${
                          blogs._id
                        }`
                      )
                    }
                  >
                    <h2>{blogs.title}</h2>
                    <p>{blogs.description}</p>
                  </div>
                  <div className="blogStatusDateTime">
                    {blogs.approved === false ? (
                      <span className="status underreview">Under Review</span>
                    ) : (
                      <span className="status active">Active</span>
                    )}
                    <div className="dateTime">
                      <p> {moment(blogs.CreatedAt).fromNow()}</p>
                      <p>&nbsp;|&nbsp;</p>
                      {round <= 0 ? <p>Quick read</p> : <p>{round}mins read</p>}
                    </div>
                  </div>
                </div>
                <div className="blogOptionsStats">
                  <div className="blogOptions">
                    <div
                      className="delete"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setId(blogs._id);
                        setOpen(true);
                      }}
                    >
                      <svg
                        width="22"
                        height="25"
                        viewBox="0 0 22 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.42074 0.0566493C7.93175 0.213126 7.58946 0.511409 7.34497 0.980839C7.24228 1.18132 7.20805 1.32802 7.18849 1.69965L7.15915 2.16419L4.44526 2.18864L1.73137 2.21309L1.39885 2.37446C0.582241 2.77543 0.0834716 3.69962 0.235058 4.54557C0.386645 5.40619 1.10057 6.15924 1.88295 6.27659L2.09811 6.30593V14.7997C2.09811 20.7262 2.11278 23.3814 2.1519 23.5819C2.25458 24.1492 2.61644 24.6186 3.13966 24.8582L3.44283 25H10.8266H18.2103L18.489 24.868C18.846 24.7017 19.159 24.3888 19.3399 24.0171L19.4817 23.7286L19.5061 14.9904L19.5306 6.25215L19.8386 6.09567C20.6357 5.69959 21.1247 4.7754 20.978 3.93923C20.8557 3.24975 20.4303 2.68252 19.8142 2.37446L19.4817 2.21309L16.7678 2.18864L14.0539 2.16419L14.0246 1.69965C14.005 1.29379 13.9757 1.19599 13.8339 0.92705C13.6432 0.565198 13.384 0.315814 13.0075 0.139777L12.7336 0.0126402L10.6799 0.00286046C9.07599 -0.00691933 8.58211 0.00775035 8.42074 0.0566493ZM12.6163 1.40137C12.7434 1.5334 12.7581 1.57741 12.7581 1.86591V2.18864H10.6065H8.45497V1.86591C8.45497 1.57741 8.46964 1.5334 8.59678 1.40137L8.73859 1.25956H10.6065H12.4745L12.6163 1.40137ZM19.3937 3.58715C19.8435 3.92456 19.8289 4.59936 19.3594 4.91231L19.1981 5.02478H10.6065H2.01498L1.84872 4.91231C1.61401 4.76073 1.44286 4.39888 1.48687 4.14949C1.53088 3.88544 1.69225 3.65072 1.90251 3.54314C2.06388 3.46491 2.55776 3.46002 10.6652 3.4698L19.2567 3.48447L19.3937 3.58715ZM18.225 14.9024L18.2103 23.5037L18.0978 23.6162L17.9854 23.7286L10.8852 23.7433C5.78509 23.7531 3.746 23.7384 3.65309 23.6993C3.34992 23.577 3.36948 24.1492 3.36948 14.8437C3.36948 10.1787 3.38415 6.34505 3.40371 6.33038C3.41838 6.31082 6.76307 6.29615 10.8364 6.29615H18.2348L18.225 14.9024Z"
                          fill="black"
                        />
                        <path
                          d="M6.51372 8.73621C6.12742 8.91225 6.15676 8.41837 6.15676 15.0246C6.15676 21.538 6.1372 21.1076 6.46482 21.3081C6.76311 21.4939 7.16897 21.3766 7.34011 21.0587C7.42324 20.9023 7.42813 20.6187 7.42813 15.0491C7.42813 9.58216 7.42324 9.19586 7.34011 9.03939C7.17386 8.70198 6.84624 8.58463 6.51372 8.73621Z"
                          fill="black"
                        />
                        <path
                          d="M10.6355 8.6922C10.5622 8.71665 10.4546 8.77533 10.4008 8.82423C10.1563 9.03939 10.1661 8.8389 10.1661 15.0588C10.1661 20.6187 10.171 20.9023 10.2541 21.0587C10.4252 21.3766 10.8311 21.4939 11.1294 21.3081C11.457 21.1076 11.4374 21.538 11.4374 15.0197C11.4374 9.18608 11.4374 9.11762 11.3396 8.96115C11.281 8.86335 11.1587 8.77044 11.0463 8.72154C10.8262 8.63352 10.8311 8.63352 10.6355 8.6922Z"
                          fill="black"
                        />
                        <path
                          d="M14.6158 8.70687C14.5229 8.7411 14.4006 8.8389 14.3371 8.93181L14.2246 9.09807V15.0491V21.0001L14.3273 21.1321C14.4544 21.2935 14.6647 21.4059 14.8456 21.4059C15.0217 21.4059 15.271 21.2543 15.3835 21.0783C15.4666 20.9512 15.4715 20.648 15.4715 15.0246C15.4715 9.45014 15.4666 9.09807 15.3835 8.97093C15.2173 8.71176 14.9092 8.60419 14.6158 8.70687Z"
                          fill="black"
                        />
                      </svg>
                      Delete
                    </div>
                    {blog_status === false ? (
                      <div
                        className="edit"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`/blog/edit/${blogs._id}`)}
                      >
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.4714 0.0504584C21.3638 0.0895796 21.1877 0.162932 21.0802 0.221614C20.9579 0.285186 18.6987 2.51509 15.1826 6.036L9.48073 11.7477L9.0993 13.6549C8.77166 15.3175 8.73253 15.5816 8.77655 15.7381C8.84012 15.9483 9.10419 16.1977 9.30957 16.2466C9.40737 16.2662 10.0529 16.1586 11.2118 15.9288C12.1752 15.7381 13.0408 15.562 13.1337 15.5376C13.2706 15.4984 14.4344 14.359 19.0312 9.75741C25.4715 3.3073 24.9923 3.84521 24.9923 3.06768C24.9874 2.39773 24.8945 2.24125 23.8284 1.17519C23.1096 0.456341 22.8846 0.260735 22.6548 0.158042C22.3174 0.00155686 21.7697 -0.0473446 21.4714 0.0504584ZM22.7868 2.23147C23.4519 2.89653 23.5595 3.02367 23.535 3.12147C23.5155 3.18504 23.3052 3.43444 23.0607 3.67895L22.6206 4.11906L21.7501 3.24862L20.8846 2.38306L21.354 1.9185C21.6181 1.65932 21.8626 1.45393 21.9164 1.45393C21.9702 1.45393 22.3272 1.7669 22.7868 2.23147ZM20.7134 4.31467L21.5692 5.17045L17.0751 9.66449L12.5811 14.1585L11.5346 14.3639C10.9624 14.4813 10.4783 14.5595 10.4588 14.5449C10.4441 14.5253 10.5223 14.0461 10.6348 13.4739L10.8402 12.4323L15.3245 7.94316C17.7891 5.47852 19.8185 3.45889 19.8332 3.45889C19.8478 3.45889 20.2439 3.84521 20.7134 4.31467Z"
                            fill="black"
                          />
                          <path
                            d="M2.15557 4.04572C1.20688 4.24132 0.434239 4.92105 0.11638 5.84529L0.00390625 6.17293V14.5106V22.8483L0.11638 23.1711C0.395118 23.9829 1.02106 24.6088 1.82793 24.8875L2.15557 25H10.4933H18.831L19.1586 24.8875C19.9557 24.6088 20.5572 24.0171 20.8702 23.1858L20.9827 22.8972L20.9973 17.166C21.0071 11.4787 21.0071 11.4298 20.9093 11.2342C20.7968 11.0142 20.5181 10.843 20.2736 10.843C20.0291 10.843 19.7503 11.0142 19.6379 11.2342C19.5401 11.425 19.5401 11.5081 19.5401 16.9704C19.5401 23.2004 19.5645 22.8043 19.1733 23.1907C18.7772 23.5868 19.4814 23.5574 10.4933 23.5574C1.50518 23.5574 2.20936 23.5868 1.81326 23.1907C1.41716 22.7946 1.4465 23.4987 1.4465 14.5106C1.4465 5.52254 1.41716 6.22672 1.81326 5.83062C2.19958 5.43941 1.80348 5.46386 8.03353 5.46386C13.4958 5.46386 13.579 5.46386 13.7697 5.36606C13.9897 5.25358 14.1609 4.97484 14.1609 4.73034C14.1609 4.48583 13.9897 4.20709 13.7697 4.09462C13.579 3.99681 13.5007 3.99681 7.96507 4.0017C4.87939 4.00659 2.26316 4.02615 2.15557 4.04572Z"
                            fill="black"
                          />
                        </svg>
                        Edit
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="blogStats">
                    <div className="views">
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
                          fill="black"
                        />
                      </svg>
                      {blogs.views}
                    </div>
                    <div className="comments">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 3.5C0 2.70435 0.316071 1.94129 0.87868 1.37868C1.44129 0.816071 2.20435 0.5 3 0.5H17C17.7956 0.5 18.5587 0.816071 19.1213 1.37868C19.6839 1.94129 20 2.70435 20 3.5V13.5C20 14.2956 19.6839 15.0587 19.1213 15.6213C18.5587 16.1839 17.7956 16.5 17 16.5H5.667C5.45063 16.5 5.2401 16.5702 5.067 16.7L1.6 19.3C1.45143 19.4114 1.27477 19.4793 1.08981 19.496C0.904844 19.5126 0.718892 19.4775 0.552786 19.3944C0.386681 19.3114 0.246984 19.1837 0.149349 19.0257C0.0517147 18.8678 0 18.6857 0 18.5V3.5ZM5 3.5C4.73478 3.5 4.48043 3.60536 4.29289 3.79289C4.10536 3.98043 4 4.23478 4 4.5C4 4.76522 4.10536 5.01957 4.29289 5.20711C4.48043 5.39464 4.73478 5.5 5 5.5H15C15.2652 5.5 15.5196 5.39464 15.7071 5.20711C15.8946 5.01957 16 4.76522 16 4.5C16 4.23478 15.8946 3.98043 15.7071 3.79289C15.5196 3.60536 15.2652 3.5 15 3.5H5ZM5 7.5C4.73478 7.5 4.48043 7.60536 4.29289 7.79289C4.10536 7.98043 4 8.23478 4 8.5C4 8.76522 4.10536 9.01957 4.29289 9.20711C4.48043 9.39464 4.73478 9.5 5 9.5H15C15.2652 9.5 15.5196 9.39464 15.7071 9.20711C15.8946 9.01957 16 8.76522 16 8.5C16 8.23478 15.8946 7.98043 15.7071 7.79289C15.5196 7.60536 15.2652 7.5 15 7.5H5ZM5 11.5C4.73478 11.5 4.48043 11.6054 4.29289 11.7929C4.10536 11.9804 4 12.2348 4 12.5C4 12.7652 4.10536 13.0196 4.29289 13.2071C4.48043 13.3946 4.73478 13.5 5 13.5H9C9.26522 13.5 9.51957 13.3946 9.70711 13.2071C9.89464 13.0196 10 12.7652 10 12.5C10 12.2348 9.89464 11.9804 9.70711 11.7929C9.51957 11.6054 9.26522 11.5 9 11.5H5Z"
                          fill="black"
                        />
                      </svg>
                      {blogs.commentslength}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default UserDashboard;
