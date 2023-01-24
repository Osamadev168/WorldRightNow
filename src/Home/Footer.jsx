import Line from "../../assets/line.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Line} />
      <div className="footercontent">
        <p>Copyright © 2023 Company Name</p>
        <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
