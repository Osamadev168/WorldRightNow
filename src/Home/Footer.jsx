import { Divider } from "@mui/material";
import Line from "../../assets/line.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercontent">
        <h1>LOGO</h1>
        <div className="div1footer">
          <p>About us</p>
          <p>Pricing</p>
          <p>Blogs</p>
          <p>FAQ's</p>
          <p>Contact us</p>
        </div>
      </div>
      <div className="div2footer">
        <Divider />
        <div className="div3footer">
          <div className="companyname">
            <p>Copyright © 2023 Company Name</p>
          </div>
          <div className="infofooter">
            <p>All Rights Reserved</p>
            <p>| Terms and Conditions</p>
            <p>| Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
