import { useState } from "react";
import Categories from "./Categories.jsx";
import Information from "./Information";
import LatestPosts from "./LatestPosts";
import Popular from "./Popular";
import Hero from "./hero";
import FooterContainer from "./FooterContainer.jsx";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../Context/Context.jsx";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  const [category, setCategory] = useState("");
  return (
    <>
      <Hero />
      <Categories setCategory={setCategory} />
      <LatestPosts category={category} />
      <Popular category={category} />
      <Information />
      <FooterContainer />
    </>
  );
};
export default Home;
