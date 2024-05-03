import React, { useEffect, useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { Card, Button } from "flowbite-react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Spinner } from "flowbite-react";
import SunImage from "../assets/sun.jpg";
import PlanetImage from "../assets/planet2.jpg";
import HumanImage from "../assets/humans.jpg";
import MoonImage from "../assets/moon.jpg";

export default function main() {
  return (
    
    <div className="flex flex-col space-y-4 px-10 py-8">
      <h5 className="align-top text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
        The Solar System
      </h5>
      <div className="grid gap-8 laptop:grid-cols-4 tablet:grid-cols-1 grid-flow-col-2 justify-stretch">
        <div className="flex justify-center ">
          <Card
            className="max-w-sm rounded-t-full"
            renderImage={() => <img className="animate-rotate-y rounded-full origin-bottom bg-slate-950-950 shadow-lg shadow-slate-800/50" src={SunImage} alt="sun" />}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sun
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 break-words text-ellipsis block mx-h-9">
              The Sun is the star at the heart of our solar system. Its gravity
              holds the solar system together, keeping everything – from the
              biggest planets to the smallest bits of debris – in its orbit.
            </p>

            <pre></pre>
            <pre></pre>
            <pre></pre>

            <Link to="https://science.nasa.gov/sun/">
              <Button className="hover:animate-wiggle hover:bg-indigo-500 duration-300 w-full bg-gradient-to-tr from-indigo-500 from-10% via-sky-500 via-50% to-emerald-500 to-80%">
                Read more
                <svg
                  className="-mr-1 ml-2 mt-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>
        </div>

        <div className="flex justify-center">
          <Card
            className="max-w-sm rounded-t-full"
            renderImage={() => <img className="animate-rotate-y rounded-full bg-slate-950-950 shadow-lg shadow-slate-800/50" src={MoonImage} alt="moon" />}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Moon
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 overflow-clip">
              Naturally-formed bodies that orbit planets are called moons, or
              planetary satellites. The best-known planetary satellite is, of
              course, Earth’s Moon. Since it was named before we learned about
              other planetary satellites, it is called simply “Moon.”
            </p>

            <Link to="https://science.nasa.gov/solar-system/moons/">
              <Button className="hover:animate-wiggle hover:bg-indigo-500 duration-300 w-full bg-gradient-to-tr from-indigo-500 from-10% via-sky-500 via-50% to-emerald-500 to-80%">
                Read more
                <svg
                  className="-mr-1 ml-2 mt-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>
        </div>
        <div className="flex justify-center">
          <Card
            className="max-w-sm rounded-t-full"
            renderImage={() => (
              <img className="animate-rotate-y rounded-full bg-slate-950-950 shadow-lg shadow-slate-800/50" src={HumanImage} alt="humaninsapce" />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Human Space
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Human space exploration helps to address fundamental questions
              about our place in the universe and the history of our solar
              system.
            </p>
            <pre></pre>
            <pre></pre>
            <pre></pre>
            <pre></pre>
            <pre></pre>
            <pre></pre>

            <Link to="https://www.nasa.gov/humans-in-space/">
              <Button className="hover:animate-wiggle hover:bg-indigo-500 duration-300 w-full bg-gradient-to-tr from-indigo-500 from-10% via-sky-500 via-50% to-emerald-500 to-80%">
                Read more
                <svg
                  className="-mr-1 ml-2 mt-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>
        </div>
        <div className="flex justify-center">
          <Card
            className="max-w-sm rounded-t-full"
            renderImage={() => (
              <div className="">
                <img
                  className="animate-rotate-y rounded-full object-cover h-[273px] bg-slate-950-950 shadow-lg shadow-slate-800/50"
                  src={PlanetImage}
                  alt="planet"
                />
              </div>
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Planet
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              The solar system has eight planets: Mercury, Venus, Earth, Mars,
              Jupiter, Saturn, Uranus, and Neptune. There are five officially
              recognized dwarf planets in our solar system: Ceres, Pluto,
              Haumea, Makemake, and Eris.
            </p>
            <pre></pre>

            <Link to="https://science.nasa.gov/solar-system/planets/">
              <Button className="hover:animate-wiggle hover:bg-indigo-500 duration-300 w-full bg-gradient-to-tr from-indigo-500 from-10% via-sky-500 via-50% to-emerald-500 to-80%">
                Read more
                <svg
                  className="-mr-1 ml-2 mt-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
