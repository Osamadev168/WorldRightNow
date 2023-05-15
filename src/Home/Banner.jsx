import "../App.css";
import heroImage from "../../assets/Hero Image.webp";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn, moveIn } from "../utils/motion";

const Banner = () => {
  return (
    <div className="heroParentContainer">
      <div className="heroContainer">
        <motion.div
          className="mainContainerBanner"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="bannerdiv1">
            <h1 className="text1banner">
              <span className="textContainer">
                <motion.span
                  className="textBlock"
                  variants={moveIn("up", "tween", 100, 0.1, 0.4)}
                >
                  <span className="gradientText">Hubble Feed</span> - Blog
                </motion.span>
              </span>
              <span className="textContainer">
                <motion.span
                  className="textBlock"
                  variants={moveIn("up", "tween", 100, 0.1, 0.4)}
                >
                  posting of the future
                </motion.span>
              </span>
            </h1>
            <motion.p
              className="text2banner"
              variants={fadeIn("up", "tween", 50, 0.2, 0.3)}
            >
              Easily grow your business and reach new audiences by posting your
              blogs on Hubble Feed. With our SEO optimisation and targeted
              traffic, your business will get the online exposure it needs to
              thrive. Contact us & Start blogging your way to success now!
            </motion.p>
          </div>
          <motion.div
            className="bannerdiv2"
            variants={fadeIn("up", "tween", 50, 0.1, 0.4)}
          >
            <a className="primaryButton" href="/contact">
              Contact us
            </a>
            <a className="secondaryButton" href="/all/blogs">
              <div>Explore Blogs</div>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="heroImageContainer">
        <motion.div className="HoveringCard">
          <div className="cardNav">
            <div className="cardDot"></div>
            <div className="cardDot"></div>
            <div className="cardDot"></div>
          </div>
          <div className="hoveringCardText">
            <span className="textLeft">Traffic</span>
            <span className="textRight">+88%</span>
          </div>
          <svg
            width="195"
            height="73"
            viewBox="0 0 195 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cardChart"
          >
            <path
              d="M1.54747 61.9783L-0.000152588 60.3717V75.5H195V1L193.452 4.93058L193.452 4.93084C191.904 8.86151 188.809 16.7224 185.714 21.1843C182.619 25.6464 179.524 26.7093 176.428 26.6484C173.333 26.5875 170.238 25.4029 167.143 24.1407C164.047 22.8784 160.952 21.5386 157.857 21.9377C154.762 22.3368 151.667 24.4748 148.571 26.6755L148.396 26.8001C145.359 28.9604 142.322 31.1207 139.286 30.1448C136.19 29.1501 133.095 24.8973 130 25.19C126.905 25.4826 123.809 30.3205 120.714 33.276C117.619 36.2315 114.524 37.3046 111.428 38.6094C108.333 39.9143 105.238 41.4509 102.143 41.7202C99.0475 41.9896 95.9522 40.9917 92.857 39.8127C89.7618 38.6337 86.6665 37.2735 83.5713 39.9614C80.476 42.6492 77.3808 49.3852 74.2856 52.9216C71.1903 56.458 68.0951 56.7949 64.9998 56.1889C61.9046 55.5828 58.8094 54.0339 55.7141 52.0661C52.6189 50.0982 49.5237 47.7114 46.4284 47.3585C43.3332 47.0056 40.2379 48.6866 37.1427 52.2881C34.0475 55.8896 30.9522 61.4116 27.857 63.9837C24.7618 66.5558 21.6665 66.178 18.5713 66.6911C15.476 67.2041 12.3808 68.6079 9.28556 67.7031C6.19032 66.7983 3.09509 63.585 1.54747 61.9783Z"
              fill="url(#paint0_linear_947_2159)"
            />
            <path
              d="M-0.000152588 60.3716L1.54747 61.9783C3.09509 63.585 6.19032 66.7983 9.28556 67.7031C12.3808 68.6079 15.476 67.2041 18.5713 66.6911C21.6665 66.178 24.7618 66.5558 27.857 63.9837C30.9522 61.4116 34.0475 55.8896 37.1427 52.2881C40.2379 48.6866 43.3332 47.0056 46.4284 47.3585C49.5237 47.7114 52.6189 50.0982 55.7141 52.0661C58.8094 54.0339 61.9046 55.5828 64.9998 56.1889C68.0951 56.7949 71.1903 56.458 74.2856 52.9216C77.3808 49.3852 80.476 42.6492 83.5713 39.9614C86.6665 37.2735 89.7618 38.6337 92.857 39.8127C95.9522 40.9917 99.0475 41.9896 102.143 41.7202C105.238 41.4509 108.333 39.9143 111.428 38.6094C114.524 37.3046 117.619 36.2315 120.714 33.276C123.809 30.3205 126.905 25.4826 130 25.19C133.095 24.8973 136.19 29.1501 139.286 30.1448C142.381 31.1395 145.476 28.8761 148.571 26.6755C151.667 24.4748 154.762 22.3368 157.857 21.9377C160.952 21.5386 164.047 22.8784 167.143 24.1407C170.238 25.4029 173.333 26.5875 176.428 26.6484C179.524 26.7093 182.619 25.6464 185.714 21.1843C188.809 16.7223 191.905 8.86115 193.452 4.93058L195 1"
              stroke="#A02CFC"
            />
            <defs>
              <linearGradient
                id="paint0_linear_947_2159"
                x1="97.4998"
                y1="1"
                x2="97.4998"
                y2="75.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A02CFC" stop-opacity="0.25" />
                <stop offset="1" stop-color="#A02CFC" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <img
          src={heroImage}
          alt="Hero Image"
          className="heroImage"
          loading="lazy"
        />
        <motion.div className="HoveringCard HoveringCardRight">
          <div className="cardNav">
            <div className="cardDot"></div>
            <div className="cardDot"></div>
            <div className="cardDot"></div>
          </div>
          <div className="hoveringCardText">
            <span className="textLeft">Impressions</span>
            <span className="textRight">+76%</span>
          </div>
          <svg
            width="195"
            height="73"
            viewBox="0 0 195 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cardChart"
          >
            <path
              d="M0 56.8998L2.03125 60.2148C4.0625 63.5297 8.125 70.1596 12.1875 67.106C16.25 64.0523 20.3125 51.315 24.375 48.4899C28.4375 45.6649 32.5 52.7519 36.5625 53.6093C40.625 54.4668 44.6875 49.0945 48.75 43.7128C52.8125 38.3312 56.875 32.9401 60.9375 34.4147C65 35.8894 69.0625 44.2298 73.125 48.9489C77.1875 53.6681 81.25 54.766 85.3125 49.3792C89.375 43.9923 93.4375 32.1208 97.5 30.2021C101.563 28.2833 105.625 36.3174 109.687 38.0048C113.75 39.6921 117.813 35.0327 121.875 32.0526C125.938 29.0724 130 27.7715 134.063 26.9129C138.125 26.0544 142.188 25.6382 146.25 21.8367C150.313 18.0352 154.375 10.8484 158.438 6.46421C162.5 2.08005 166.563 0.498576 170.625 3.76603C174.688 7.03348 178.75 15.1499 182.813 15.497C186.875 15.8442 190.938 8.42208 192.969 4.71104L195 1"
              stroke="#FC2C7E"
              stroke-linecap="square"
            />
            <path
              d="M2.03125 60.2148L0 56.8999V79.2268H195V1L192.969 4.71104C190.938 8.42208 186.875 15.8442 182.812 15.497C178.75 15.1499 174.688 7.03348 170.625 3.76603C166.562 0.498576 162.5 2.08005 158.438 6.46421C154.375 10.8484 150.313 18.0352 146.25 21.8367C142.188 25.6382 138.125 26.0544 134.063 26.9129C130 27.7715 125.938 29.0724 121.875 32.0526C117.813 35.0327 113.75 39.6921 109.688 38.0048C105.625 36.3174 101.563 28.2833 97.5 30.2021C93.4375 32.1208 89.375 43.9923 85.3125 49.3792C81.25 54.766 77.1875 53.6681 73.125 48.9489C69.0625 44.2298 65 35.8894 60.9375 34.4147C56.8806 32.9421 52.8236 38.3164 48.7667 43.6907L48.75 43.7128C44.6875 49.0945 40.625 54.4668 36.5625 53.6094C32.5 52.7519 28.4375 45.6649 24.375 48.49C20.3125 51.315 16.25 64.0523 12.1875 67.106C8.125 70.1597 4.0625 63.5298 2.03125 60.2148Z"
              fill="url(#paint0_linear_848_1596)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_848_1596"
                x1="97.5"
                y1="1"
                x2="97.5"
                y2="79.2268"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FC2C7E" stop-opacity="0.25" />
                <stop offset="1" stop-color="#FC2C7E" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
