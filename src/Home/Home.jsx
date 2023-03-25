import { useState } from "react";
import Categories from "./Categories.jsx";
import Information from "./Information";
import LatestPosts from "./LatestPosts";
import Popular from "./Popular";
import Hero from "./hero";
import FooterContainer from "./FooterContainer.jsx";
import { Helmet } from "react-helmet";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="HubbleFeed is a great place to start sharing your ideas online and reach dense audiance Join today!"
        />
        <title>Hubble Feed</title>
        <link rel="canonical" href="https://www.hubblefeed.com/" />
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
