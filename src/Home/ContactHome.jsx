import Picture from "../../assets/illustration.svg";
const ContactHome = () => {
  return (
    <div className="contacthome">
      <div className="rectangle">
        <div className="div1">
          <div className="textcontactus">
            <h3 className="text1contactus">Let’s get started</h3>
            <p className="text2contactus">
              Are you ready to take your business to the next level? Hubble Feed
              offers expert blog posting services to help you elevate your
              business. Contact us today to get started.
            </p>
            {/* <div className="inputcontainer">
              <input
                className="inputcontactus"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <a className="newsletterButton" href="/account">
                Subscribe
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2669 8.10037L7.05462 11.2942L1.39712 6.7585C1.36341 6.73277 1.33256 6.70349 1.3051 6.67117C0.899921 6.16935 1.19552 5.38416 1.86399 5.24761L19.8795 1.57007L11.4758 17.9243C11.1679 18.5246 10.3468 18.6019 9.96715 18.0953C9.93441 18.0491 9.90849 17.9985 9.89018 17.9449L8.31907 13.7018"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div> */}
            <a className="primaryButton" href="/contact">
              Contact us
            </a>
          </div>

          <div className="picturecontactus">
            <img src={Picture} alt="info" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
