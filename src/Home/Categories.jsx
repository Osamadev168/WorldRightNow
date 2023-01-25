import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "../App.css";
const Categories = () => {
  const [activediv, setActiveDiv] = useState("");
  useEffect(() => {
    setActiveDiv("div1");
  }, []);
  return (
    <div className="categoriesmaindiv">
      <div className="div1categories">
        <div
          className={activediv === "div1" ? "AllActive" : "All"}
          onClick={() => setActiveDiv("div1")}
        >
          <p>All</p>
        </div>
        <div
          className={activediv === "div2" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div2")}
        >
          <p>Technology</p>
        </div>
        <div
          className={activediv === "div3" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div3")}
        >
          <p>Health</p>
        </div>
        <div
          className={activediv === "div4" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div4")}
        >
          <p>Gaming</p>
        </div>
        <div
          className={activediv === "div5" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div5")}
        >
          <p>Fashion</p>
        </div>
        <div
          className={activediv === "div6" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div6")}
        >
          <p>AI</p>
        </div>
        <div
          className={activediv === "div7" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div7")}
        >
          <p>Forex Trading</p>
        </div>
      </div>
      <div className="div2categories">
        <div
          className={activediv === "div8" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div8")}
        >
          <p>Politics</p>
        </div>
        <div
          className={activediv === "div9" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div9")}
        >
          <p>Art</p>
        </div>
        <div
          className={activediv === "div10" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div10")}
        >
          <p>Programming</p>
        </div>
        <div
          className={activediv === "div11" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div11")}
        >
          <p>Networking</p>
        </div>
        <div
          className={activediv === "div12" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div12")}
        >
          <p>Life Hacks</p>
        </div>
        <div
          className={activediv === "div13" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div13")}
        >
          <p>Crime</p>
        </div>
        <div
          className={activediv === "div14" ? "TechActive" : "Tech"}
          onClick={() => setActiveDiv("div14")}
        >
          <p>Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
