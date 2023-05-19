import { useState } from "react";
import Categories from "./Categories.jsx";
import Information from "./Information";
import LatestPosts from "./LatestPosts";
import Popular from "./Popular";
import Hero from "./hero";
import FooterContainer from "./FooterContainer.jsx";
import { Helmet } from "react-helmet";
import ServiceCard from "./ServiceCard";
import macbook from "../../assets/macbook.webp";
import macbook2 from "../../assets/macbook2.webp";
import phone from "../../assets/phone.webp";
import plan1 from "../../assets/plan1.webp";
import plan2 from "../../assets/plan2.webp";
import service1 from "../../assets/service1.svg";
import service2 from "../../assets/service2.svg";
import service3 from "../../assets/service3.svg";
import service4 from "../../assets/service4.svg";
import service5 from "../../assets/service5.svg";
import service6 from "../../assets/service6.svg";

import FAQ from "../../src/Home/FAQ";
import { motion } from "framer-motion";
import React from "react";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";
import Pricing from "../Pricing/pricing.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Grow your business on Hubble Feed! Boost your reach with our SEO optimised blogs. Increased exposure for your success. Start blogging now! Contact us."
        />
        <title>Hubble Feed - Blog posting of the future</title>
        <link rel="canonical" href="https://www.hubblefeed.com/" />
      </Helmet>

      <Hero />
      <Categories setCategory={setCategory} />
      <LatestPosts category={category} />
      <Popular category={category} />

      {/* Why Hubble Feed Section */}

      <motion.section
        className="servicesSection"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h2
          className="infoMainText"
          variants={fadeIn("up", "tween", 30, 0.1, 0.3)}
        >
          Why Hubble Feed?
        </motion.h2>
        <motion.p
          className="paragraph"
          variants={fadeIn("up", "tween", 30, 0.2, 0.3)}
        >
          Discover the power of top-quality, SEO-optimized content with Hubble
          Feed. Attract new readers, increase website traffic, and boost revenue
          with our customizable packages and user-friendly platform.
        </motion.p>

        <motion.div
          className="servicesCards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <ServiceCard
            svg={service1}
            cardHeading={"Attract Audience"}
            cardDescription={
              "Attract new readers and reach your target audience with ease"
            }
            index={0.1}
            distance={50}
          />
          <ServiceCard
            svg={service2}
            cardHeading={"Boost Traffic"}
            cardDescription={
              "Drive organic growth and engagement through SEO excellence"
            }
            index={0.3}
            distance={60}
          />
          <ServiceCard
            svg={service3}
            cardHeading={"Custom Packages"}
            cardDescription={
              "Tailor-made solutions to fit your budget and content requirements perfectly"
            }
            index={0.5}
            distance={70}
          />
          <ServiceCard
            svg={service4}
            cardHeading={"User-friendly Platform"}
            cardDescription={
              "Effortlessly create, manage, and publish content with our intuitive interface"
            }
            index={0.2}
            distance={50}
          />
          <ServiceCard
            svg={service5}
            cardHeading={"AI Capabilities"}
            cardDescription={"Leverage AI technology for optimized results"}
            index={0.3}
            distance={60}
          />
          <ServiceCard
            svg={service6}
            cardHeading={"Performance Insights"}
            cardDescription={
              "Measure your success with our analytics on your personal dashboard"
            }
            index={0.5}
            distance={70}
          />
        </motion.div>
      </motion.section>
      <motion.section
        className="featuresSection"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h2
          className="infoMainText"
          variants={fadeIn("up", "tween", 30, 0.1, 0.3)}
        >
          Features of Hubble Feed
        </motion.h2>
        <motion.p
          className="paragraph"
          variants={fadeIn("up", "tween", 30, 0.2, 0.3)}
        >
          Discover the power of top-quality, SEO-optimized content with Hubble
          Feed. Attract new readers, increase website traffic, and boost revenue
          with our customizable packages and user-friendly platform.
        </motion.p>
        <motion.div className="featuresCardsSection">
          <motion.div
            className="featuresCard card1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <h3>
              User-friendly blog <br />
              and guest posting <br />
              services
            </h3>
            <motion.img
              src={macbook}
              alt="mackbook mockup"
              className="macbook"
              variants={fadeIn("up", "tween", 50, 0.25, 0.3)}
            />
          </motion.div>
          <motion.div
            className="featuresCard card2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <h3>
              Fast and Reliable <br />
              Customer <br />
              Support
            </h3>
            <motion.img
              src={phone}
              alt="iphone mockup"
              className="phone"
              variants={fadeIn("left", "tween", 30, 0.35, 0.3)}
            />
          </motion.div>
          <motion.div
            className="featuresCard card3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <h3>
              Flexible, <br />
              Customizable <br />
              Plans
            </h3>
            <div className="plansContainer">
              <motion.img
                src={plan1}
                alt="Plan 2"
                className="plan"
                variants={zoomIn(0.8, 0.45, 0.3)}
              />
              <img src={plan2} alt="Plan 1" className="plan" />
            </div>
          </motion.div>
          <motion.div
            className="featuresCard card4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <h3>
              Easy to use platform <br />
              for content submission <br />
              and management
            </h3>
            <motion.img
              src={macbook2}
              alt="Macbook"
              className="macbook2"
              variants={fadeIn("up", "tween", 50, 0.35, 0.3)}
            />
          </motion.div>
        </motion.div>
      </motion.section>
      <Information />
      <Pricing margin={"0"} />
      <FAQ data={faqData} />
      <FooterContainer />
    </>
  );
};

//FAQ data
const faqData = [
  {
    question: "What is Hubble Feed and how can it help my business?",
    answer:
      "Hubble Feed is a comprehensive blogging solution designed to help businesses and individuals grow their online presence. By providing a platform for creating, managing, and publishing SEO-optimized blogs, Hubble Feed can attract new audiences, increase website traffic, and boost revenue.",
  },
  {
    question: "How can Hubble Feed help attract an audience?",
    answer:
      "Hubble Feed utilizes top-quality, SEO-optimized content to attract new readers and reach your target audience effectively. Our platform also provides the ability to tailor-make solutions to fit your unique content requirements.",
  },
  {
    question: "How does Hubble Feed drive organic growth and engagement?",
    answer:
      "Hubble Feed uses SEO excellence to drive organic growth and engagement. This involves optimizing your blog posts to be easily discovered by search engines, resulting in more traffic to your blog and increased engagement from your audience.",
  },
  {
    question: "What are the custom packages offered by Hubble Feed?",
    answer:
      "Hubble Feed offers custom packages to suit your budget and content requirements. Whether you're a small business or an individual blogger, we have packages that can cater to your unique needs.",
  },
  {
    question: "How user-friendly is the Hubble Feed platform?",
    answer:
      "Hubble Feed has an intuitive interface that makes it easy to create, manage, and publish content. It also offers a personal dashboard where you can monitor all of your published and unpublished blogs.",
  },
];

export default Home;
