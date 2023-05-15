import ourstory from "../../assets/ourstory.webp";
import ourvision from "../../assets/ourvision.webp";
import value1 from "../../assets/value1.svg";
import value2 from "../../assets/value2.svg";
import value3 from "../../assets/value3.svg";
import value4 from "../../assets/value4.svg";
import value5 from "../../assets/value5.svg";
import value6 from "../../assets/value6.svg";
import { motion } from "framer-motion";
import React from "react";
import { staggerContainer, fadeIn } from "../utils/motion";
import ServiceCard from "../Home/ServiceCard";
import FAQ from "../../src/Home/FAQ";
import aboutBG from "../../assets/abouthero.webp";

const AboutUs = () => {
  return (
    <>
      <motion.section
        className="aboutHero"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        style={{ backgroundImage: `url(${aboutBG})` }}
      >
        <motion.h1
          className="aboutHeroHeading"
          variants={fadeIn("up", "tween", 50, 0.1, 0.3)}
        >
          Empowering Your Online Presence with Smart Blogging Solutions
        </motion.h1>
      </motion.section>
      <motion.section
        className="ourStory"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          className="imageCard"
          variants={fadeIn("up", "tween", 50, 0.1, 0.4)}
        >
          <div className="cardNav">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <img src={ourstory} alt="our Story" />
        </motion.div>
        <div className="textSection">
          <motion.h2
            className="textHeading"
            variants={fadeIn("up", "tween", 30, 0.2, 0.3)}
          >
            Our Story
          </motion.h2>
          <motion.p
            className="textDescription"
            variants={fadeIn("up", "tween", 30, 0.3, 0.3)}
          >
            Hubble Feed was founded in 2018 by a group of passionate bloggers
            and SEO experts who understood the need for a platform that
            simplifies the process of creating, managing, and publishing
            SEO-optimized blogs. Over the years, we have evolved into a
            comprehensive blogging solution for businesses and individuals,
            providing top-notch content and cutting-edge AI technology to help
            our clients succeed in the digital world.
          </motion.p>
        </div>
      </motion.section>
      <motion.section
        className="ourVision"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="textSection">
          <motion.h2
            className="textHeading"
            variants={fadeIn("up", "tween", 30, 0.2, 0.3)}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="textDescription"
            variants={fadeIn("up", "tween", 30, 0.3, 0.3)}
          >
            At Hubble Feed, we believe in the power of quality content and its
            ability to transform businesses and foster connections between
            people. Our mission is to provide an easy-to-use platform that
            empowers businesses and individuals to reach new audiences, increase
            website traffic, and boost revenue through targeted and
            SEO-optimized content.
          </motion.p>
        </div>
        <motion.div
          className="imageCard"
          variants={fadeIn("up", "tween", 50, 0.1, 0.4)}
        >
          <div className="cardNav">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <img src={ourvision} alt="" />
        </motion.div>
      </motion.section>
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
          Our Core Values
        </motion.h2>

        <motion.div
          className="servicesCards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <ServiceCard
            svg={value1}
            cardHeading={"Client Success"}
            cardDescription={
              "We prioritize your success and provide tools and support to grow your online presence."
            }
            index={0.1}
            distance={50}
          />
          <ServiceCard
            svg={value2}
            cardHeading={"Innovation"}
            cardDescription={
              "We develop new features and use advanced AI to enhance your blogging experience."
            }
            index={0.3}
            distance={60}
          />
          <ServiceCard
            svg={value3}
            cardHeading={"Quality"}
            cardDescription={
              "We ensure your blogs meet high standards of content quality and SEO for maximum visibility."
            }
            index={0.5}
            distance={70}
          />
          <ServiceCard
            svg={value4}
            cardHeading={"Integrity"}
            cardDescription={
              "We practice transparent and ethical business and aim to build long-lasting client relationships."
            }
            index={0.2}
            distance={50}
          />
          <ServiceCard
            svg={value5}
            cardHeading={"Collaboration"}
            cardDescription={
              "Our team of content creators, SEO experts, and support specialists provide a seamless experience."
            }
            index={0.3}
            distance={60}
          />
          <ServiceCard
            svg={value6}
            cardHeading={"Adaptability"}
            cardDescription={
              "We adapt our strategies and services to meet evolving client needs and the dynamic digital landscape."
            }
            index={0.5}
            distance={70}
          />
        </motion.div>
      </motion.section>
      <FAQ data={faqData} />
    </>
  );
};
const faqData = [
  {
    question: "How do you ensure that your content is SEO optimized?",
    answer:
      "To ensure high-quality content, a small publishing fee is required. You can pay the fee before or after submitting your blog, and our team will review your payment within an hour. Once your payment is confirmed, your blog will be published and visible to our engaged readership.",
  },
  {
    question:
      "What topics do you cover in your blog and guest posting services?",
    answer:
      "To ensure high-quality content, a small publishing fee is required. You can pay the fee before or after submitting your blog, and our team will review your payment within an hour. Once your payment is confirmed, your blog will be published and visible to our engaged readership.",
  },
  {
    question:
      "How long does it take to receive a completed blog post or guest article?",
    answer:
      "To ensure high-quality content, a small publishing fee is required. You can pay the fee before or after submitting your blog, and our team will review your payment within an hour. Once your payment is confirmed, your blog will be published and visible to our engaged readership.",
  },
  {
    question: "Can I choose the topics for my blog or guest posts?",
    answer:
      "To ensure high-quality content, a small publishing fee is required. You can pay the fee before or after submitting your blog, and our team will review your payment within an hour. Once your payment is confirmed, your blog will be published and visible to our engaged readership.",
  },
  {
    question: "Can you create content for any industry or niche?",
    answer:
      "To ensure high-quality content, a small publishing fee is required. You can pay the fee before or after submitting your blog, and our team will review your payment within an hour. Once your payment is confirmed, your blog will be published and visible to our engaged readership.",
  },
];
export default AboutUs;
