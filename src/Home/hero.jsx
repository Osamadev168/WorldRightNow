import Banner from "./Banner";
import image from "../../assets/herobg.webp";
import mobileImage from "../../assets/herobgTablet.webp";

import "../App.css";
const Hero = () => {
  return (
    <div className="heroSection">
      <Banner />
      <style jsx>{`
        .heroSection {
          background-image: url(${image});
        }

        @media (max-width: 768px) {
          .heroSection {
            background-image: url(${mobileImage});
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
