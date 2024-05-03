import React, { useEffect, useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Imag1 from "../assets/ContrailX_Ekmen_960.jpg";
import nasaLogo from "../assets/NASA_logo.png";

export default function AstronomyDay() {
  const [data, setData] = useState(null);
  const [loading, setLading] = useState(false);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      // console.log(NASA_KEY)
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;
      try {
        const res = await fetch(url);
        const apidata = await res.json();
        setData(apidata);
        console.log("DATA\n", apidata);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);

  useEffect(() => {
    async function fetchAPIDataOFMars() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      // console.log(NASA_KEY)
      const url2 =
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000" +
        `&api_key=${NASA_KEY}`;
      try {
        const res = await fetch(url2);
        const Marsdata = await res.json();
        console.log("MARSDATA\n", Marsdata);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIDataOFMars();
  }, []);

  return (
    <div className="flex flex-col space-y-4 px-5 py-8">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/feature">Feature</Breadcrumb.Item>
        <Breadcrumb.Item>APOD</Breadcrumb.Item>
      </Breadcrumb>
      {data ? (
        <div className="grid laptop:grid-cols-2 gap-2 tablet:grid-cols-1 grid-flow-col-2 justify-stretch">
          <div className="flex justify-center bg-black bg-no-repeat bg-cover bg-fixed bg-clip-border bg-origin-padding">
            <img src={data?.url} alt="astronmy day of the picture" />
          </div>
          <div className="flex align-top">
            <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col align-top">
              <div className="flex h-full flex-col justify-start gap-4 p-6">
                <h5 className="align-top text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data?.title}
                </h5>
                <h5 className="text-sm font-semibold tracking-tight text-blue-800 dark:text-white">
                {data?.date}
                </h5>
                <p className=" max-w-xl font-normal text-gray-700 dark:text-gray-400">
                  {data?.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example " size="xl" />
        </div>
      )}
    </div>
  );
}
