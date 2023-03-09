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
    console.log(token && token);
  }, []);
  const [category, setCategory] = useState("");
  const { token } = useContext(UserContext);
  return (
    <>
      <Hero />
      <Categories setCategory={setCategory} />
      <Popular category={category} />
      <LatestPosts category={category} />
      <Information />
      <FooterContainer />
    </>
  );
};
export default Home;
