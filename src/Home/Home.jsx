import { Box } from "@mui/material";
import Banner from "./Banner";
import Categories from "./Categories.jsx";
import ContactHome from "./ContactHome";
import Footer from "./Footer";
import Header from "./Header";
import Information from "./Information";
import LatestPosts from "./LatestPosts";
import Popular from "./Popular";
import PopularPosts from "./PopularPosts";
import PostSlider from "./PostSlider";
const Styles = {
  HomeBg: {
    backgroundColor: "#F8FAFB",
  },
};
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Popular />
      <Information />
      <ContactHome />
      <Footer />
    </>
  );
};

export default Home;
