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
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: GlobeAsiaAustraliaIcon,
    link:"/mars",
  },
  {
    name: "Astronomy Picture of the Day",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: CameraIcon,
    link:"/apod",
  },
  {
    name: "Mars Weather Service API",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: GlobeAltIcon,
    link:"/mars",
  },
  {
    name: "NASA Image and Video Library",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: SparklesIcon,
    link:"/apod",
  },
];

export default function Example() {
  return (
    <div className="bg-white pt-14 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fade-right mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600 text-center">Deploy faster</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Everything you need to explore the Universe
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
          NASA explores the unknown in air and space, innovates
            for the benefit of humanity, and inspires the world through discovery.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 laptop:grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16 1">
            {features.map((feature) => (
              <div key={feature.name} className="animate-fade-up relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-50% to-emerald-500 to-60%">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <Link to={feature.link}>
                  {feature.name}
                    </Link>
                 
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
