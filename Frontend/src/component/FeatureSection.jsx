import React from "react";
import {
  GlobeAltIcon,
  GlobeAsiaAustraliaIcon,
  SparklesIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const features = [
  {
    name: "Mars Rover Photos",
    description:
      "Explore the most mesmerizing sights and uncover the mysteries of the Mars through breathtaking imagery from Rovers",
    icon: GlobeAsiaAustraliaIcon,
    link:"/mars",
  },
  {
    name: "Astronomy Picture of the Day",
    description:
      "Immerse yourself in the captivating beauty of space with APOD - where every day brings a stunning new cosmic wonder. Explore the universe's most mesmerizing sights and uncover the mysteries of the cosmos through breathtaking imagery. It's like having a front-row seat to the greatest show in the universe!",
    icon: CameraIcon,
    link:"/apod",
  },
  {
    name: "Asteroids - NeoWs",
    description:
      "With NeoWs (Near Earth Object Web Service) you can explore near earth Asteroid information. ",
    icon: GlobeAltIcon,
    link:"/neo",
  },

];

export default function Example() {
  return (
    <div className="bg-white pt-14 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fade-right mx-auto max-w-2xl lg:text-center ">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600 text-center">Deploy faster</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Unlock the Cosmos: Discover Features to Navigate Space
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
          Explore with APOD, Mars Rover Snaps, and NEO Updates!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
  {features.map((feature, index) => (
    <div key={feature.name} className="flex flex-col">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          <Link to={feature.link}>{feature.name}</Link>
        </h3>
        <p className="text-base text-gray-600">{feature.description}</p>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  );
}
