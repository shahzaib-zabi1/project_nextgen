import React from "react";
import PagesBanner from "./PagesBanner";
import About from "../About Us/About";
import Chefs from "../Our Chefs/Chefs";

const AboutUsPage = () => {
  return <>

    <PagesBanner title={'About Us'} />
    <About />
    <Chefs />
    
  </>;
};

export default AboutUsPage;
