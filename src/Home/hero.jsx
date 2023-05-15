import Header from "./Header";
import Banner from "./Banner";
import image from "../../assets/herobg.webp";
import "../App.css";
const Hero = () => {
  return (
    <div className="heroSection" style={{ backgroundImage: `url(${image})` }}>
      <Banner />
    </div>
  );
};

export default Hero;
