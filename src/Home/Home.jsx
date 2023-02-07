import { Box } from "@mui/material";
import { useState } from "react";
import Categories from "./Categories.jsx";
import ContactHome from "./ContactHome";
import Footer from "./Footer";
import Information from "./Information";
import LatestPosts from "./LatestPosts";
import Popular from "./Popular";
import Hero from "./hero";
import DummyData from "./Dummydata";
const Home = () => {
  const [category, setCategory] = useState("");

  return (
    <>
      <Hero />
      <Categories setCategory={setCategory} />
      <DummyData category={category} />
      <Popular category={category} />
      <LatestPosts category={category} />
      <Information />
      <ContactHome />
      <Footer />
    </>
  );
};

export default Home;
