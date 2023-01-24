import Picture from "../../assets/contactuspicture.png";
import Button from "../../assets/Button.png";
const ContactHome = () => {
  return (
    <div className="contacthome">
      <div className="rectangle">
        <div className="textcontactus">
          <h1 className="text1contactus">
            Never miss out on an interesting blog
          </h1>
          <h1 className="text2contactus">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus quam
            sit non et quam vitae cras. Sed tincidunt purus semper sed.
            Adipiscing in quis enim nunc, cursus. Condimentum in iaculis libero
            laoreet pharetra.
          </h1>
        </div>
        <div className="inputcontainer">
          <input className="inputcontactus" />
          <img src={Button} className="contactusbutton" />
        </div>
        <div className="picturecontactus">
          <img src={Picture} />
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
