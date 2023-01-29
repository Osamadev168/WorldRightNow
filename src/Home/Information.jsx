import Vector1 from "../../assets/Group.png";
import Vector2 from "../../assets/Vector 8.png";
import Vector3 from "../../assets/Group2.png";
import Vector4 from "../../assets/Group3.png";
import Vector5 from "../../assets/Vector9.png";

const Information = () => {
  return (
    <div className="informationmaincontainer">
      <h1 className="infoMainText">Quick Blog Publication</h1>
      <div className="div1Info">
        <img className="vector1" src={Vector1} />
        <h1 className="text1">Select and purchase a plan</h1>
        <h1 className="text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus quam
          sit non et quam vitae cras. Sed tincidunt purus semper sed. Adipiscing
          in quis enim nunc, cursus. Condimentum in iaculis libero laoreet
          pharetra.
        </h1>
        <img src={Vector2} className="vectorContainer1" />
      </div>

      <div className="div2Info">
        <img src={Vector3} />
        <h1 className="text1">Select and purchase a plan</h1>
        <h1 className="text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus quam
          sit non et quam vitae cras. Sed tincidunt purus semper sed. Adipiscing
          in quis enim nunc, cursus. Condimentum in iaculis libero laoreet
          pharetra.
        </h1>
        <img src={Vector5} className="vectorContainer2" />
      </div>
      <div className="div3Info">
        <img className="vector1" src={Vector4} />
        <h1 className="text1">Select and purchase a plan</h1>
        <h1 className="text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus quam
          sit non et quam vitae cras. Sed tincidunt purus semper sed. Adipiscing
          in quis enim nunc, cursus. Condimentum in iaculis libero laoreet
          pharetra.
        </h1>
      </div>
    </div>
  );
};

export default Information;
