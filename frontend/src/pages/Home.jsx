import React from "react";
import Hero from "../components/Hero.jsx";
import LatestCollections from "../components/LatestCollections.jsx";
import BestSellers from "../components/BestSellers.jsx";
import Policy from "../components/Policy.jsx";
import NewsLetterBox from "../components/NewsLetterBox.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSellers />
      <Policy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
