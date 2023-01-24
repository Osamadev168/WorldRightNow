import "../App.css";
const Header = () => {
  return (
    <div className="HeaderMainContainer">
      <div className="div1Header">
        <p className="logoHeader">Logo</p>
        <div className="div2Header">
          <p>About us</p>
          <p>Pricing</p>
          <p>Blogs</p>
          <p>FAQ's</p>
          <p>Contact us</p>
        </div>
      </div>
      <div className="div3Header">
        <p>Login</p>
        <p>Signup</p>
      </div>
    </div>
  );
};

export default Header;
