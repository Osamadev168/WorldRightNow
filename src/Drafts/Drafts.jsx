import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/Context";
import { deleteDraft, getUserDrafts } from "../Api/Api";
import {  useNavigate } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const Drafts = () => {
    const { user } = useContext(UserContext);
    const [drafts, setDrafts] = useState([]);
    const [refresh, setRefreh] = useState(false);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (user && user.uid) {
            fetchUserDrafts();
        }
    }, [user , refresh]);

    const fetchUserDrafts = () => {
        getUserDrafts(user.uid).then((res) => {
            setDrafts(res.data); // Assuming the API response contains an array of drafts
        }).catch(error => {
            console.error("Error fetching drafts:", error);
        });
    };

    return (
        <div className="dashboardContainer paddingtop">
            <h1>Drafts</h1>
            <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deleting Blog"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this draft?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>No</Button>
          <Button
            onClick={() =>
              deleteDraft(id).then(() => {
                setOpen(false);
                setRefreh(!refresh);
              })
            }
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
            <div className="draftsContainer">
                {drafts.map((draft) => (
                       <div className="blogsContainer" key={draft._id}>
                       <div className="blogCard">
                         <div className="blogInfo">
                           <div
                             className="blogTitleDescription"
                             onClick={() => navigate(`/draft/edit/${draft._id}`)}
                           >
                             <h2>{draft.title}</h2>
                             <p>{draft.description}</p>
                           </div>
                         </div>
                         <div className="blogOptionsStats">
                           <div className="blogOptions">
                             <div
                               className="delete"
                               style={{ cursor: "pointer" }}
                               onClick={() => {
                                 setId(draft._id);
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
                           </div>
                         </div>
                       </div>
                     </div>
                ))}
            </div>
            
        </div>
    );
};

export default Drafts;
