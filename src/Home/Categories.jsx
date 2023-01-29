import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "../App.css";

const Categories = ({ setCategory }) => {
  function getWindowSize() {}

  const [activediv, setActiveDiv] = useState("");

  useEffect(() => {
    setActiveDiv("div1");
    setCategory("");
  }, []);
  return (
    <div className="categoriesmaindiv">
      <div className="div1categories" xs={12}>
        <div
          className={activediv === "div1" ? "AllActive" : "All"}
          onClick={() => {
            setActiveDiv("div1");
            setCategory("");
          }}
        >
          <p>All</p>
        </div>
        <div
          className={activediv === "div2" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div2");
            setCategory("Tech");
          }}
        >
          <p>Technology</p>
        </div>
        <div
          className={activediv === "div3" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div3");
            setCategory("Sports");
          }}
        >
          <p>Sports</p>
        </div>
        <div
          className={activediv === "div4" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div4");
            setCategory("Science");
          }}
        >
          <p>Science</p>
        </div>
        <div
          className={activediv === "div5" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div5");
            setCategory("Fashion");
          }}
        >
          <p>Fashion</p>
        </div>
        <div
          className={activediv === "div6" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div6");
            setCategory("AI");
          }}
        >
          <p>AI</p>
        </div>
        <div
          className={activediv === "div7" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div7");
            setCategory("Forex Trading");
          }}
        >
          <p>Forex Trading</p>
        </div>
      </div>
      <div className="div2categories">
        <div
          className={activediv === "div8" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div8");
            setCategory("Politics");
          }}
        >
          <p>Politics</p>
        </div>
        <div
          className={activediv === "div9" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div9");
            setCategory("Art");
          }}
        >
          <p>Art</p>
        </div>
        <div
          className={activediv === "div10" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div10");
            setCategory("Programming");
          }}
        >
          <p>Programming</p>
        </div>
        <div
          className={activediv === "div11" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div11");
            setCategory("Networking");
          }}
        >
          <p>Networking</p>
        </div>
        <div
          className={activediv === "div12" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div12");
            setCategory("Life Hacks");
          }}
        >
          <p>Life Hacks</p>
        </div>
        <div
          className={activediv === "div13" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div13");
            setCategory("Crime");
          }}
        >
          <p>Crime</p>
        </div>
        <div
          className={activediv === "div14" ? "TechActive" : "Tech"}
          onClick={() => {
            setActiveDiv("div14");
            setCategory("Anime");
          }}
        >
          <p>Anime</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
