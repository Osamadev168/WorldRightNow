import React, { useState } from "react";
import "../../src/App.css";
import arrow from "../../assets/arrow.svg";
import { staggerContainer, fadeIn, zoomIn, moveIn } from "../utils/motion";
import { motion } from "framer-motion";

const FAQ = ({ data, margin }) => {
  const [expanded, setExpanded] = useState([
    true,
    ...new Array(data.length - 1).fill(false),
  ]);

  const toggleExpand = (index) => {
    let newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <motion.section
      className="faqSection"
      style={{ marginTop: margin }}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.h3
        className="infoMainText"
        variants={fadeIn("up", "tween", 50, 0.1, 0.3)}
      >
        Frequently Asked Questions
      </motion.h3>
      <motion.div
        className="faqItemsContainer"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="faqItem"
            variants={fadeIn("up", "tween", 50, index * 0.2, 0.25)}
          >
            <div
              className="questionContainer"
              onClick={() => toggleExpand(index)}
            >
              <div className="numberQuestion">
                <span className="faqNumber">{index + 1}. </span>
                <h5 className="faqQuestion">{item.question}</h5>
              </div>
              <img
                src={arrow}
                className={`arrow ${expanded[index] ? "up" : "down"}`}
                alt="arrow"
              />
            </div>

            {/* {expanded[index] && <p className="faqAnswer">{item.answer}</p>} */}
            <p
              className={`faqAnswer ${
                expanded[index] ? "expanded" : "collapsed"
              }`}
            >
              {item.answer}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FAQ;
