import React from "react";
import Mars from "../assets/mars.jpg";
import Neo from "../assets/neo.jpg";
import Apod from "../assets/apod.jpg";
import { Card, Button } from "flowbite-react";
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
      `Explore the most mesmerizing sights and uncover the mysteries of 
      the Mars through breathtaking imagery from Rovers. This feature is designed to collect image data gathered by NASA's 
      Curiosity, Opportunity, and Spirit rovers on Mars. Those Rovers have several cameras and Each camera has a 
      unique function and perspective.
      `,
    icon: GlobeAsiaAustraliaIcon,
    link:"/mars",
    image: Mars
  },
  {
    name: "Astronomy Picture of the Day - APOD",
    description:
      `Immerse yourself in the captivating beauty of space with APOD - where every day 
      brings a stunning new cosmic wonder. Explore the universe's most mesmerizing sights and 
      uncover the mysteries of the cosmos through breathtaking imagery. It's like having a front-row 
      seat to the greatest show in the universe.`,
    icon: CameraIcon,
    link:"/apod",
    image: Apod
  },
  {
    name: "Asteroids - NEO WS",
    description:
      `Discover the secrets of near-Earth asteroids with NeoWs (Near Earth Object Web Service). Dive into
       their orbits, sizes, and compositions. Sign up now to explore this cosmic database 
       and stay ahead of any celestial surprises. `,
    icon: GlobeAltIcon,
    link:"/neo",
    image: Neo
  },

];

export default function Example() {
  return (
    <div className="bg-white pt-14 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fade-right mx-auto max-w-2xl lg:text-center ">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600 text-center">Deploy faster</h2> */}
          <p className="mt-2 mb-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Unlock the Cosmos: Discover Features to Navigate Space
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
          Explore with Mars Rover Photos, Astronomy Picture of the Day, and Near Earth Object Updates!!<br></br>
          Sign up Now to get the full potential of features !!!
          </p>
        </div>
        <div className="flex mt-10 justify-center gap-4">
  {features.map((feature, index) => (
    <Link key={feature.name} to={feature.link} className="flex-1">
      <div className="bg-white rounded-lg shadow-lw p-6 mb-8 hover:animate-shake border border-gray-300 max-w-sm flex flex-col h-full"> {/* Added h-full */}
        <div className="flex-grow text-center"> {/* Added flex-grow */}
          <img className="animate-rotate-y rounded-full mx-auto mb-4" src={feature.image} alt="rover" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {feature.name}
          </h3>
          <p className="text-base text-justify text-gray-600">{feature.description} <br></br><br>
          </br>Sign up Now to get the full potential of this feature !!</p>
        </div>
      </div>
    </Link>
  ))}
</div>









      </div>
    </div>
  );
}
