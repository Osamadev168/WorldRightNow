import Header from "./Header";
import Banner from "./Banner";
import "../App.css";
const Hero = () => {
  return (
    <div
      className="heroSection"
      style={{ backgroundImage: 'url("./assets/herobg.webp")' }}
    >
      <Header />
      <Banner />
    </div>
  );
};

export default Hero;
