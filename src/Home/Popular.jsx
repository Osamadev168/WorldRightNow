import food from "../../assets/food.jpg";
import Slider from "react-slick";

const Popular = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="mainPopularContainer">
      <h2>Popular</h2>

      <Slider {...settings}>
        <div className="PopularCard">
          <div className="image"></div>
          <div className="title">
            <h3>Health</h3>
            <div className="info">
              <p>Jan 19, 2023</p>
              <p>|</p>
              <p>4 mins read</p>
            </div>
          </div>
          <div className="description">
            <p className="blogtitle">
              The Top 10 Nutrient-Dense Fruits You Should be Eating
            </p>
            <p className="data">
              Lorem ipsum dolor sit amet consectetur. Lectus morbi purus a et
              egestas mi id. Scelerisque mi ut massa sed velit viverra....
            </p>
          </div>
        </div>
        <div className="PopularCard">
          <div className="image"></div>
          <div className="title">
            <h3>Health</h3>
            <div className="info">
              <p>Jan 19, 2023</p>
              <p>|</p>
              <p>4 mins read</p>
            </div>
          </div>
          <div className="description">
            <p className="blogtitle">
              The Top 10 Nutrient-Dense Fruits You Should be Eating
            </p>
            <p className="data">
              Lorem ipsum dolor sit amet consectetur. Lectus morbi purus a et
              egestas mi id. Scelerisque mi ut massa sed velit viverra....
            </p>
          </div>
        </div>{" "}
        <div className="PopularCard">
          <div className="image"></div>
          <div className="title">
            <h3>Health</h3>
            <div className="info">
              <p>Jan 19, 2023</p>
              <p>|</p>
              <p>4 mins read</p>
            </div>
          </div>
          <div className="description">
            <p className="blogtitle">
              The Top 10 Nutrient-Dense Fruits You Should be Eating
            </p>
            <p className="data">
              Lorem ipsum dolor sit amet consectetur. Lectus morbi purus a et
              egestas mi id. Scelerisque mi ut massa sed velit viverra....
            </p>
          </div>
        </div>{" "}
        <div className="PopularCard">
          <div className="image"></div>
          <div className="title">
            <h3>Health</h3>
            <div className="info">
              <p>Jan 19, 2023</p>
              <p>|</p>
              <p>4 mins read</p>
            </div>
          </div>
          <div className="description">
            <p className="blogtitle">
              The Top 10 Nutrient-Dense Fruits You Should be Eating
            </p>
            <p className="data">
              Lorem ipsum dolor sit amet consectetur. Lectus morbi purus a et
              egestas mi id. Scelerisque mi ut massa sed velit viverra....
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Popular;
