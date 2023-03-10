import "../App.css";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="heroParentContainer">
      <div className="heroContainer">
        <div className="mainContainerBanner">
          <div className="bannerdiv1">
            <h1 className="text1banner">
              Unlock Your <br />
              Business's Potential with Our Blog Posting
            </h1>
            <p className="text2banner">
              Easily grow your business and reach new audiences by posting your
              blogs on our website. With our SEO optimisation and targeted
              traffic, your business will get the online exposure it needs to
              thrive. Contact us & Start blogging your way to success now!
            </p>
          </div>
          <div className="bannerdiv2">
            <a className="primaryButton" href="/blogs">
              Contact us
            </a>
            <a
              className="secondaryButton"
              // onClick={() => window.open("/all/blogs", "_self")}
              href="/all/blogs"
            >
              Explore Blogs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
