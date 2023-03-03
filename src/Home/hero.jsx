// import bgimage from "../../assets/bgimage.png";
import Header from "./Header";
import Banner from "./Banner";
import "../App.css";
const Hero = () => {
  return (
    <div
      className="heroSection"
      style={{ backgroundImage: 'url("./assets/herobg.png")' }}
    >
      <Header />
      <Banner />
    </div>
  );
};

export default Hero;
