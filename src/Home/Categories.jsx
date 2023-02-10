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
      <div className="div1categories">
        <div
          className={activediv === "div1" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div1");
            setCategory("");
          }}
        >
          <a>All</a>
        </div>
        <div
          className={activediv === "div2" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div2");
            setCategory("category");
          }}
        >
          <a>Technology</a>
        </div>
        <div
          className={activediv === "div3" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div3");
            setCategory("Sports");
          }}
        >
          <a>Sports</a>
        </div>
        <div
          className={activediv === "div4" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div4");
            setCategory("Science");
          }}
        >
          <a>Science</a>
        </div>
        <div
          className={activediv === "div5" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div5");
            setCategory("Fashion");
          }}
        >
          <a>Fashion</a>
        </div>
        <div
          className={activediv === "div6" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div6");
            setCategory("AI");
          }}
        >
          <a>Artificial Intelligence</a>
        </div>
        <div
          className={activediv === "div7" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div7");
            setCategory("Forex Trading");
          }}
        >
          <a>Forex Trading</a>
        </div>
        <div
          className={activediv === "div8" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div8");
            setCategory("Politics");
          }}
        >
          <a>Politics</a>
        </div>
        <div
          className={activediv === "div9" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div9");
            setCategory("Art");
          }}
        >
          <a>Art</a>
        </div>
        <div
          className={activediv === "div10" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div10");
            setCategory("Programming");
          }}
        >
          <a>Programming</a>
        </div>
        <div
          className={activediv === "div11" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div11");
            setCategory("Networking");
          }}
        >
          <a>Networking</a>
        </div>
        <div
          className={activediv === "div12" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div12");
            setCategory("Life Hacks");
          }}
        >
          <a>Life Hacks</a>
        </div>
        <div
          className={activediv === "div13" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div13");
            setCategory("Crime");
          }}
        >
          <a>Crime</a>
        </div>
        <div
          className={activediv === "div14" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div14");
            setCategory("Anime");
          }}
        >
          <a>Anime</a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
