import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "flowbite-react";


const apis = [
  {
    name: "DONKI",
    description: `DONKI (Space Weather Database Of Notifications, Knowledge, Information) is a NASA tool for space weather data, tracking events and offering powerful search for scientists and the public.`,
    link: "https://api.nasa.gov/"
  },
  {
    name: "Earth",
    description: "Unlock the significant public investment in earth observation data. Landsat imagery is provided to the public as a joint project between NASA and USGS.",
    link: "https://api.nasa.gov/"
  },
  {
    name: "EONET",
    description: "The Earth Observatory Natural Event Tracker. ",
    link: "https://api.nasa.gov/"
  },
  {
    name: "Open Science Data Repository",
    description: ` Programmatic interface for the Open Science Data Repository website.`,
    link: "https://api.nasa.gov/"
  },
  {
    name: "Satellite Situation Center",
    description: " System to cast geocentric spacecraft location information into a framework of (empirical) geophysical regions.",
    link: "https://api.nasa.gov/"
  },
  {
    name: "TLE API",
    description: "Two line element data for earth-orbiting objects at a given point in time. ",
    link: "https://api.nasa.gov/"
  },
  {
    name: "NASA Image and Video Library",
    description: " API to access the NASA Image and Video Library site at images.nasa.gov",
    link: "https://api.nasa.gov/"
  },
  {
    name: "Techport",
    description: "API to make NASA technology project data available in a machine-readable format.",
    link: "https://api.nasa.gov/"
  },
];



export default function main() {
  return (
    <div className="flex flex-col space-y-4 px-10 py-8">
      <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5 mt-10">
        Discover Other Api Services
      </h5>
      <div className="grid gap-8 laptop:grid-cols-4 tablet:grid-cols-1 grid-flow-col-2 justify-stretch">
        {apis.map((api, index) => (
          <div key={index} className="flex justify-center">
            <Card className=" animate-rotate-y max-w-sm w-full h-full flex flex-col">
              <div className="flex text-center flex-col flex-grow">
                <h5 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {api.name}
                </h5>
                <div className="mt-4 flex-grow">
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400 break-words text-ellipsis">
                    {api.description}
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <Link to={api.link}>
                  <Button className="hover:animate-shake bg-indigo-600 w-full">
                    Read more
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
