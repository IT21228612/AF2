import React from 'react';
import MainSection from "../component/main.jsx";
import FeatureSection from "../component/FeatureSection.jsx";
import CarousalSection from "../component/CarousalSection.jsx";
import HeroSection from "../component/HeroSection.jsx";


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
