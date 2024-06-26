import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { CoreTechnology } from "./components/coreTechnology";
import { About } from "./components/about";
import { Products } from "./components/products";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Investors } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <CoreTechnology data={landingPageData.Features} />
      {/* <Services data={landingPageData.Services} /> */}
      <Products data={landingPageData.Products} />
      {/* <Gallery data={landingPageData.Gallery} /> */}
      <hr style={{width:"100%"}}></hr>
      <Team data={landingPageData.Team} />
      <Investors data={landingPageData.Testimonials} funding={landingPageData.Funding} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
