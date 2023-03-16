import { Divider } from "@mui/material";
import Line from "../../assets/line.png";

const Footer = () => {
  return (
    <div className="footerhome">
      <div className="footercontent">
        <h1>LOGO</h1>
        <div className="div1footer">
          <a href="/">About us</a>
          <a href="/">Pricing</a>
          <a href="/">Blogs</a>
          <a href="/">FAQ's</a>
          <a href="/">Contact us</a>
        </div>
      </div>
      <div className="div2footer">
        <div className="div3footer">
          <div className="companyname">
            <p>Copyright © 2023 Hubble Feed</p>
          </div>
          <div className="infofooter">
            <p>All Rights Reserved</p>
            <p className="separater">&nbsp;|&nbsp;</p>
            <a
              style={{
                color: "#FC2C7E",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              href="/"
            >
              Terms and Conditions
            </a>
            <p className="separater">&nbsp;|&nbsp;</p>

            <a
              style={{
                color: "#FC2C7E",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              href="/"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
