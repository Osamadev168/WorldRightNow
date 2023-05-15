import React from "react";
import { staggerContainer, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

function ServiceCard({ svg, cardHeading, distance, index, cardDescription }) {
  return (
    <motion.div
      className="cardContainer"
      variants={fadeIn("up", "tween", distance, index, 0.3)}
    >
      <div className="servicesCard">
        <div className="cardNav">
          <div className="cardDot"></div>
          <div className="cardDot"></div>
          <div className="cardDot"></div>
        </div>
        <div className="cardContent">
          <img src={svg} alt="Icon" className="cardIcon" />
          <h3 className="cardTitle">{cardHeading}</h3>
          <p className="cardText">{cardDescription}</p>
        </div>
      </div>
      <div className="cardShadow"></div>
    </motion.div>
  );
}

export default ServiceCard;
