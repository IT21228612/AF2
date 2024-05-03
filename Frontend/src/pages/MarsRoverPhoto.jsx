import React, { useEffect, useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { Card, Button } from "flowbite-react";
import { Spinner } from "flowbite-react";
import Imag1 from "../assets/ContrailX_Ekmen_960.jpg";

export default function MarsRoverPhoto() {
    const [data, setData] = useState(null);
    const [loading, setLading] = useState(false);
  
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
          setData(Marsdata.photos);
          console.log("MARSDATA\n", Marsdata);
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchAPIDataOFMars();
    }, []);
  
    return (
      <div className="flex flex-col space-y-4 px-10 py-8">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/feature">Projects</Breadcrumb.Item>
          <Breadcrumb.Item>Mars-Rover-Photos</Breadcrumb.Item>
        </Breadcrumb>
        {data ? (
        <div className="grid gap-8 laptop:grid-cols-4 tablet:grid-cols-1 grid-flow-col-2 justify-stretch">
         {data?.map((photo) => (
           <div className="flex justify-center">
           <Card
             className="max-w-sm"
             renderImage={() => (
               <img width={500} height={500} src={photo.img_src} alt="image 1" />
             )}
           >
             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {photo.camera.full_name}
             </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so
               far, in reverse chronological order.
             </p>
             <Link to="/main">
               <Button className="w-full">
                 Read more
                 <svg
                   className="-mr-1 ml-2 h-4 w-4"
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
  
         ))}
           
          </div>
          ) : (
             <div className="text-center">
             <Spinner aria-label="Center-aligned spinner example " size="xl" />
           </div>
          )}
          
        
       
      </div>
    );
}
