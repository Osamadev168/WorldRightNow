import information1 from "../../assets/information1.svg";
import information2 from "../../assets/information2.svg";
import information3 from "../../assets/information3.svg";
import information4 from "../../assets/information4.svg";

import { motion, useScroll } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn, scale } from "../utils/motion";

const Information = () => {
  return (
    <div className="informationmaincontainer">
      <h2 className="infoMainText">Quick Blog Publication</h2>
      <div className="stepsContainer">
        <motion.div
          className="step"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="stepText">
            <h3 className="stepHeading">1. Create an account</h3>
            <p className="stepDescription">
              Join our community by creating a free account. This will allow you
              to write and submit blogs, as well as having access to your
              personal dashboard to keep track of all of your published and
              unpublished blogs.
            </p>
          </div>
          <div className="stepAnimation">
            <div className="animationContainer">
              <div className="upperContent">
                <div className="dataInput">
                  <motion.div
                    className="nameHeading"
                    variants={scale(0.0, 0.5)}
                  />
                  <motion.div
                    className="nameInput"
                    variants={scale(0.2, 0.5)}
                  />
                </div>
                <div className="dataInput">
                  <motion.div
                    className="nameHeading"
                    variants={scale(0.0, 0.5)}
                  />
                  <motion.div
                    className="nameInput"
                    variants={scale(0.2, 0.5)}
                  />
                </div>
              </div>
              <motion.div
                className="lowerButton"
                variants={fadeIn("up", "tween", 20, 0.1, 0.3)}
              >
                <img src={information1} alt="Icon" />
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="step"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="stepAnimation">
            <div className="animationContainer">
              <div className="upperContent">
                <div className="dataInput blogAnim">
                  <motion.div
                    className="nameHeading titleInput"
                    variants={scale(0.2, 0.5)}
                  />
                  <motion.div
                    className="nameInput blogInput"
                    variants={scale(0.1, 0.5)}
                  />
                </div>
              </div>
              <motion.div
                className="lowerButton"
                variants={fadeIn("up", "tween", 20, 0.1, 0.3)}
              >
                <img src={information2} alt="Icon" />
              </motion.div>
            </div>
          </div>
          <div className="stepText">
            <h3 className="stepHeading">2. Submit the blog</h3>
            <p className="stepDescription">
              Once you've created an account, you can start writing and
              submitting your blogs through our user-friendly writing portal.
              Share your knowledge, ideas, and perspectives with our readers.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="step"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="stepText">
            <h3 className="stepHeading">3. Wait for approval</h3>
            <p className="stepDescription">
              To ensure high-quality content, a small publishing fee is
              required. You can pay the fee before or after submitting your
              blog, and our team will review your payment within an hour. Once
              your payment is confirmed, your blog will be published and visible
              to our engaged readership.
            </p>
          </div>
          <div className="stepAnimation">
            <div className="animationContainer">
              <motion.div
                className="lowerButton firstButton centerButton"
                variants={scale(0.1, 0.5)}
              >
                <img src={information2} alt="Icon" />
              </motion.div>
              <motion.div
                className="lowerButton secondButton centerButton"
                variants={scale(0.2, 0.5)}
              >
                <img src={information3} alt="Icon" />
              </motion.div>
              <motion.div
                className="lowerButton secondButton centerButton"
                variants={scale(0.4, 0.5)}
              >
                <img src={information4} alt="Icon" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Information;
