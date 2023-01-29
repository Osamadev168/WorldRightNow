import { Box } from "@mui/material";
import { useState } from "react";
import Banner from "./Banner";
import Categories from "./Categories.jsx";
import ContactHome from "./ContactHome";
import Footer from "./Footer";
import Header from "./Header";
import Information from "./Information";
import LatestPosts from "./LatestPosts";
import Popular from "./Popular";
const Home = () => {
  const [category, setCategory] = useState("");

  return (
    <>
      <Header />
      <Banner />
      <Categories setCategory={setCategory} />
      <Popular category={category} />
      <LatestPosts category={category} />
      <Information />
      <ContactHome />
      <Footer />
    </>
  );
};

export default Home;
