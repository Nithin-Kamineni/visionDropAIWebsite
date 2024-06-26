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
import SmoothScroll from "smooth-scroll";
import JsonData from "./data/data.json";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Nithin-Kamineni/visionDropAIWebsite/main/src/data/data.json"
        );
        const data = await response.json();
        setLandingPageData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <CoreTechnology data={landingPageData.CoreTech} />
      {/* <Services data={landingPageData.Services} /> */}
      <Products data={landingPageData.Products} />
      {/* <Gallery data={landingPageData.Gallery} /> */}
      <hr style={{ width: "100%" }}></hr>
      <Team
        data={landingPageData.Team}
        description={landingPageData.TeamDescription}
      />
      <Investors
        data={landingPageData.Investors}
        description={landingPageData.InvestorDesription}
        funding={landingPageData.Funding}
      />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
