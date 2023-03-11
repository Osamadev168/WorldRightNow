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
import { Helmet } from "react-helmet";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  const [category, setCategory] = useState("");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" name="description" content="Home is good" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
