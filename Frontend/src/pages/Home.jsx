import React from 'react';
import MainSection from "../component/OtherAPISection.jsx";
import FeatureSection from "../component/FeaturesSection.jsx";
import CarousalSection from "../component/NASA_section.jsx";
import HeroSection from "../component/topBanner.jsx";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <CarousalSection />
      <MainSection/>
    </div>
  )
}
