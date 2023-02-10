import { Divider } from "@mui/material";
import Line from "../../assets/line.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercontent">
        <h1>LOGO</h1>
        <div className="div1footer">
          <a>About us</a>
          <a>Pricing</a>
          <a>Blogs</a>
          <a>FAQ's</a>
          <a>Contact us</a>
        </div>
      </div>
      <div className="div2footer">
        <div className="div3footer">
          <div className="companyname">
            <p>Copyright © 2023 Company Name</p>
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
