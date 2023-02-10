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
          <img className="vector1" src={Vector1} />
          <h3 className="text1">Select and purchase a plan</h3>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus quam
            sit non et quam vitae cras. Sed tincidunt purus semper sed.
            Adipiscing in quis enim nunc, cursus. Condimentum in iaculis libero
            laoreet pharetra.
          </p>
        </div>
      </div>

      <div className="div2Info">
        <div className="vectorContainer1">
          <img src={Vector2} />
        </div>

        <div className="infoContent">
          <img src={Vector3} />
          <h3 className="text1">Select and purchase a plan</h3>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus quam
            sit non et quam vitae cras. Sed tincidunt purus semper sed.
            Adipiscing in quis enim nunc, cursus. Condimentum in iaculis libero
            laoreet pharetra.
          </p>
        </div>
      </div>
      <div className="div3Info">
        <div className="infoContent">
          <img className="vector1" src={Vector4} />
          <h3 className="text1">Select and purchase a plan</h3>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus quam
            sit non et quam vitae cras. Sed tincidunt purus semper sed.
            Adipiscing in quis enim nunc, cursus. Condimentum in iaculis libero
            laoreet pharetra.
          </p>
        </div>
        <div className="vectorContainer2">
          <img src={Vector5} />
        </div>
      </div>
    </div>
  );
};

export default Information;
