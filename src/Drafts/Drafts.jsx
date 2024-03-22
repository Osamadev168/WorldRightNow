import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/Context";
import { getUserDrafts } from "../Api/Api";
import {  useNavigate } from "react-router-dom";

const Drafts = () => {
    const { user } = useContext(UserContext);
    const [drafts, setDrafts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (user && user.uid) {
            fetchUserDrafts();
        }
    }, [user]);

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
            <div className="draftsContainer">
                {drafts.map((draft) => (
                    <div key={draft._id} className="draftCard">
                        <h2
                         onClick={() => navigate(`/draft/edit/${draft._id}`)}
                        >{draft.title}</h2>
                        <p>{draft.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Drafts;
