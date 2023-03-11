import { useEffect, useState } from "react";
import "../App.css";
const Categories = ({ setCategory }) => {
  const [activediv, setActiveDiv] = useState("");
  useEffect(() => {
    setActiveDiv("div1");
    setCategory("");
  }, []);
  return (
    <div className="categoriesmaindiv">
      <div className="div1categories">
        <div
          className={activediv === "div1" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div1");
            setCategory("");
          }}
        >
          <div>All</div>
        </div>
        <div
          className={activediv === "div2" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div2");
            setCategory("Tech");
          }}
        >
          <div>Technology</div>
        </div>
        <div
          className={activediv === "div3" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div3");
            setCategory("Sports");
          }}
        >
          <div>Sports</div>
        </div>
        <div
          className={activediv === "div4" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div4");
            setCategory("Science");
          }}
        >
          <div>Science</div>
        </div>
        <div
          className={activediv === "div5" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div5");
            setCategory("Fashion");
          }}
        >
          <div>Fashion</div>
        </div>
        <div
          className={activediv === "div6" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div6");
            setCategory("AI");
          }}
        >
          <div>Artificial Intelligence</div>
        </div>
        <div
          className={activediv === "div7" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div7");
            setCategory("Forex Trading");
          }}
        >
          <div>Forex Trading</div>
        </div>
        <div
          className={activediv === "div8" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div8");
            setCategory("Politics");
          }}
        >
          <div>Politics</div>
        </div>
        <div
          className={activediv === "div9" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div9");
            setCategory("Art");
          }}
        >
          <div>Art</div>
        </div>
        <div
          className={activediv === "div10" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div10");
            setCategory("Programming");
          }}
        >
          <div>Programming</div>
        </div>
        <div
          className={activediv === "div11" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div11");
            setCategory("Networking");
          }}
        >
          <div>Networking</div>
        </div>
        <div
          className={activediv === "div12" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div12");
            setCategory("Life Hacks");
          }}
        >
          <div>Life Hacks</div>
        </div>
        <div
          className={activediv === "div13" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div13");
            setCategory("Crime");
          }}
        >
          <div>Crime</div>
        </div>
        <div
          className={activediv === "div14" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div14");
            setCategory("Anime");
          }}
        >
          <div>Anime</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
