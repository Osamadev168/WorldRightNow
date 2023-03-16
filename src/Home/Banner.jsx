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
              <span>Hubble Feed</span> - Blog posting of the future
            </h1>
            <p className="text2banner">
              Easily grow your business and reach new audiences by posting your
              blogs on Hubble Feed. With our SEO optimisation and targeted
              traffic, your business will get the online exposure it needs to
              thrive. Contact us & Start blogging your way to success now!
            </p>
          </div>
          <div className="bannerdiv2">
            <a className="primaryButton" href="/contact">
              Contact us
            </a>
            <a className="secondaryButton" href="/all/blogs">
              Explore Blogs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
