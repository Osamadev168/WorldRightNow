import Slider from "react-slick";
import { Box, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
import next from "../../assets/next.svg";
import prev from "../../assets/Previous.svg";
const dummyData = [
  {
    id: 1,
    title: "10 Breakthrough Technologies Changing Our World",
    category: "Technology",
    image: image1,
    description:
      "As technology continues to evolve at an exponential pace, it's important to take a step back and examine the breakthroughs that...",
    CreatedAt: new Date().toString(),
  },
  {
    id: 2,
    title: "Maximizing Profits: Strategies for Growing Your Business",
    category: "Business",
    image: image2,
    description:
      "Running a successful business is about more than just selling a product or providing a service. It's about finding ways to increase....",
    CreatedAt: new Date().toString(),
  },
  {
    id: 3,
    title: "How to Get Out of Debt and Stay Debt-Free",
    category: "Finance",
    image: image3,
    description:
      "Debt can quickly become a burden, leaving you feeling overwhelmed and stressed. Whether it's credit card debt, student loans...",
    CreatedAt: new Date().toString(),
  },
  {
    id: 4,
    title: "Virtual Reality Revolution: The Future of Gaming",
    category: "Gaming",
    image: image4,
    description:
      "Virtual reality (VR) has been a hot topic in the gaming world for several years now, and it's not hard to see why. This technology pro",
    CreatedAt: new Date().toString(),
  },
  {
    id: 5,
    title: "The Top 10 Nutrient-Dense Fruits You Should be Eating",
    category: "Health",
    image: image5,
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus morbi purus a et egestas mi id. Scelerisque mi ut massa sed velit viverra....",
    CreatedAt: new Date().toString(),
  },
];
const Popular = ({ category }) => {

  const sliderRef = useRef(null);
  


  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: isMobile ? 1 : 3.2,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 645,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <Box className="mainPopularContainer">
      <div className="titleCategory">
        {category === "" ? (
          <h3>Popular Blogs</h3>
        ) : (
          <h3>Popular in {category}</h3>
        )}
      </div>
      <Slider {...settings} ref={sliderRef} className="slider">
        {dummyData.map((posts, index) => {
          let date = new Date(posts.CreatedAt).toDateString();
          let displayMonth = date.substring(4, 10);
          let displayYear = date.substring(10);
          let displayDate = `${displayMonth},${displayYear}`;
          return (
            <Grid container>
              <div className="PopularCard" key={index}>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${posts.image})` }}
                ></div>
                <div className="title">
                  <h1 className="posttitle">{posts.category}</h1>
                  <div className="info">
                    <p>{displayDate}</p>
                    <p>&nbsp;|&nbsp;</p>
                    <p>4 mins read</p>
                  </div>
                </div>
                <div className="description">
                  <p className="blogtitle">{posts.title}</p>
                  <p className="data">{posts.description}</p>
                </div>
              </div>
            </Grid>
          );
        })}
      </Slider>
      <div className="sliderButtons">
        <div
          className="prevButton"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img src={prev} />
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="nextButton"
        >
          <img src={next} />
        </div>
      </div>
    </Box>
  );
};

export default Popular;
