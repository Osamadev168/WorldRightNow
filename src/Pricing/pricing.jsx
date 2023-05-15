import check from "../../assets/checkmark.svg";
import { motion } from "framer-motion";
import React from "react";
import { staggerContainer, fadeIn } from "../utils/motion";

const Pricing = ({ margin }) => {
  return (
    <motion.section
      className="pricingSection"
      style={{ marginTop: margin }}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.h2
        className="infoMainText"
        variants={fadeIn("up", "tween", 50, 0.1, 0.3)}
      >
        Affordable Pricing
      </motion.h2>
      <motion.div
        className="plansSection"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.a
          href="/contact"
          className="plan1"
          variants={fadeIn("up", "tween", 130, 0.2, 0.3)}
        >
          <div className="hoveredPlan"></div>
          <div className="normalPlan"></div>
          <div className="planNav">
            <div className="navDot"></div>
            <div className="navDot"></div>
            <div className="navDot"></div>
          </div>
          <div className="planContent">
            <h5 className="planName">Essential</h5>
            <h6 className="planPrice">$15.00</h6>
            <div className="planDescription">
              <div className="descriptionPoint">
                <img src={check} alt="check" />
                <p>1 blog post per package</p>
              </div>
              <div className="descriptionPoint">
                <img src={check} alt="check" />

                <p>Basic Customer Support</p>
              </div>
              <div className="descriptionPoint">
                <img src={check} alt="check" />

                <p>Basic proofreading and editing services</p>
              </div>
              <div className="descriptionPoint">
                <img src={check} alt="check" />

                <p>Performance analytics</p>
              </div>
            </div>
            <div className="planButton">
              <div className="gradientContainer">Contact us</div>
            </div>
          </div>
        </motion.a>
        <motion.a
          href="/contact"
          className="plan1 plan2"
          variants={fadeIn("up", "tween", 50, 0.1, 0.3)}
        >
          <div className="planNav planNav2">
            <div className="navDot"></div>
            <div className="navDot"></div>
            <div className="navDot"></div>
          </div>
          <div className="planContent planContent2">
            <h5 className="planName">Custom</h5>
            <h6 className="planPrice">$??.00</h6>
            <div className="planDescription">
              <div className="descriptionPoint">
                <img src={check} alt="check" />
                <p>
                  Flexible blog quantity and features to meet your specific
                  requirements
                </p>
              </div>
              <div className="descriptionPoint">
                <img src={check} alt="check" />

                <p>
                  Option to have your blog written by our team of expert content
                  writers
                </p>
              </div>
              <div className="descriptionPoint">
                <img src={check} alt="check" />

                <p>
                  A tailored blog package based on your unique needs and goals
                </p>
              </div>
              <div className="descriptionPoint">
                <img src={check} alt="check" />

                <p>Professional-grade proofreading and editing services</p>
              </div>
            </div>
            <div className="planButton">
              <div className="gradientContainer">Contact us</div>
            </div>
          </div>
        </motion.a>
        <motion.a
          href="/contact"
          className="plan1"
          variants={fadeIn("up", "tween", 130, 0.2, 0.3)}
        >
          <div className="hoveredPlan"></div>
          <div className="normalPlan"></div>
          <div className="planNav">
            <div className="navDot"></div>
            <div className="navDot"></div>
            <div className="navDot"></div>
          </div>
          <div className="planContent">
            <h5 className="planName">Premium</h5>
            <h6 className="planPrice">$35.00</h6>
            <div className="planDescription">
              <div className="descriptionPoint">
                <img src={check} alt="check" />
                <p>3 blog post per package</p>
              </div>
              <div className="descriptionPoint">
                <img src={check} alt="check" />
                <p>Priority Customer Support</p>
              </div>
              <div className="descriptionPoint">
                <img src={check} alt="check" />
                <p>Advanced proofreading and editing services</p>
              </div>
              <div className="descriptionPoint">
                <img src={check} alt="check" />
                <p>Performance analytics</p>
              </div>
            </div>
            <div className="planButton">
              <div className="gradientContainer">Contact us</div>
            </div>
          </div>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Pricing;
