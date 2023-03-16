import Vector1 from "../../assets/icon 1.svg";
import Vector2 from "../../assets/line1.svg";
import Vector3 from "../../assets/icon 2.svg";
import Vector4 from "../../assets/icon 3.svg";
import Vector5 from "../../assets/line2.svg";

const Information = () => {
  return (
    <div className="informationmaincontainer">
      <h2 className="infoMainText">Quick Blog Publication</h2>
      <div className="div1Info">
        <div className="infoContent">
          <img className="vector1" src={Vector1} alt="info" />
          <h3 className="text1">1. Create an account</h3>
          <p className="text2">
            Join our community by creating a free account. This will allow you
            to write and submit blogs, as well as having access to your personal
            dashboard to keep track of all of your published and unpublished
            blogs.
          </p>
        </div>
      </div>

      <div className="div2Info">
        <div className="vectorContainer1">
          <img src={Vector2} alt="line" />
        </div>

        <div className="infoContent">
          <img src={Vector3} alt="info" />
          <h3 className="text1">2. Submit the blog</h3>
          <p className="text2">
            Once you've created an account, you can start writing and submitting
            your blogs through our user-friendly writing portal. Share your
            knowledge, ideas, and perspectives with our readers.
          </p>
        </div>
      </div>
      <div className="div3Info">
        <div className="infoContent">
          <img className="vector1" src={Vector4} alt="info" />
          <h3 className="text1">3. Wait for approval</h3>
          <p className="text2">
            To ensure high-quality content, a small publishing fee is required.
            You can pay the fee before or after submitting your blog, and our
            team will review your payment within an hour. Once your payment is
            confirmed, your blog will be published and visible to our engaged
            readership.
          </p>
        </div>
        <div className="vectorContainer2">
          <img src={Vector5} alt="line" />
        </div>
      </div>
    </div>
  );
};

export default Information;
