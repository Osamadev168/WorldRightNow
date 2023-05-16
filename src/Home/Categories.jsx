import { useEffect, useState } from "react";
import "../App.css";
const Categories = ({ setCategory }) => {
  const [activediv, setActiveDiv] = useState("");
  useEffect(() => {
    setActiveDiv("div1");
    setCategory("All");
  }, []);
  return (
    <div className="categoriesmaindiv">
      <div className="div1categories">
        <div
          className={activediv === "div1" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div1");
            setCategory("All");
          }}
        >
          <div>All</div>
        </div>
        <div
          className={activediv === "div2" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div2");
            setCategory("Technology");
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
            setCategory("Artificial Intelligence");
          }}
        >
          <div>Artificial Intelligence</div>
        </div>
        <div
          className={activediv === "div7" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div7");
            setCategory("Health");
          }}
        >
          <div>Health</div>
        </div>
        <div
          className={activediv === "div8" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div8");
            setCategory("News");
          }}
        >
          <div>News</div>
        </div>
        <div
          className={activediv === "div9" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div9");
            setCategory("Hollywood");
          }}
        >
          <div>Hollywood</div>
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
            setCategory("Gaming");
          }}
        >
          <div>Gaming</div>
        </div>
        <div
          className={activediv === "div12" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div12");
            setCategory("LifeHacks");
          }}
        >
          <div>Life Hacks</div>
        </div>
        <div
          className={activediv === "div130" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div130");
            setCategory("General");
          }}
        >
          <div>General</div>
        </div>
        <div
          className={activediv === "div13" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div13");
            setCategory("Travel");
          }}
        >
          <div>Travel</div>
        </div>
        <div
          className={activediv === "div14" ? "categoryActive" : "category"}
          onClick={() => {
            setActiveDiv("div14");
            setCategory("Education");
          }}
        >
          <div>Education</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
