import React, { useEffect, useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { Card, Button } from "flowbite-react";
import { Spinner } from "flowbite-react";

import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user_ReduxSlice';

export default function MarsRoverPhoto() {
    const [data, setData] = useState(null);
    const [loading, setLading] = useState(false);

    const [startDate, setStartDate] = useState(0);
    const [camera, setCamera] = useState("");
   

    // Set isLoggedIn based on whether currentUser exists or not
    const { currentUser } = useSelector((state) => state.user);
    const isLoggedIn = !!currentUser;
  
    const fetchAPIData = async (params) => {
      const NASA_KEY = "yFTaevyt3ZE0WKrZzVaiSMqswvhwFm1gpdu4PVU4";
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${NASA_KEY}${params}`;
      try {
        const res = await fetch(url);
        const responseData = await res.json();
        // Check if photos array exists in the response
        if (Array.isArray(responseData.photos)) {
          // Save only the first 20 photos to state
           setData(responseData.photos.slice(0, 20));

         

        } else {
          // If photos array is not present, set data to null or empty array based on your requirement
          setData([]);
        }
        console.log("DATA\n", responseData);
       

      } catch (err) {
        console.log(err.message);
      }
    };
    
  
    useEffect(() => {
      // Fetch default data (today's image)
      fetchAPIData("&sol=1000");
    }, []);

    const handleSingleDateSubmit = () => {
      console.log("Start Date:", startDate); // Print the startDate
      fetchAPIData(`&sol=${startDate}`);
      // Reset all input fields
      setStartDate("");
      setCamera("");
    };
  
    
  
    const handleCameraSubmit = () => {
      console.log("Camera:", camera);
      fetchAPIData(`&sol=1000&camera=${camera}`);
      // Reset all input fields
     
      setStartDate("");
      setCamera("");
    };

    
  
  
    return (
      <div className="flex flex-col space-y-4 px-10 py-8">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Mars-Rover-Photos</Breadcrumb.Item>
        </Breadcrumb>
        {isLoggedIn && ( // Render only if isLoggedIn is true
        <div>
      <div className="w-full max-w-screen-xl mx-auto mt-16 sm:mt-20 lg:mt-24" style={{ marginTop: '2rem' }}>
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg  ">
          <div className="p-6">
            <div className="grid grid-cols-2 gap-20">
              {/* Column 1: Pick a date */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Pick a Sol Date</h5>
                <input
                  type="number"
                  min="999"
                  max="1500"
                  className="mt-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  placeholder="Image Count"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <button onClick={handleSingleDateSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">GO</button>
              </div>
        
              {/* Column 3: Select camera */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Select the Camera</h5>
                                    <select
                      className="mt-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                      value={camera}
                      onChange={(e) => setCamera(e.target.value)}
                    >
                          <option value="">Select Camera</option>
                          <option value="fhaz">FHAZ - Front Hazard Avoidance Camera</option>
                          <option value="rhaz">RHAZ - Rear Hazard Avoidance Camera</option>
                          <option value="mast">MAST - Mast Camera</option>
                          <option value="chemcam">CHEMCAM - Chemistry and Camera Complex</option>
                          <option value="mahli">MAHLI - Mars Hand Lens Imager</option>
                          <option value="mardi">MARDI - Mars Descent Imager</option>
                          <option value="navcam">NAVCAM - Navigation Camera</option>
                          <option value="pancam">PANCAM - Panoramic Camera</option>
                          <option value="minites">MINITES - Miniature Thermal Emission Spectrometer (Mini-TES)</option>
                        </select>
                <button onClick={handleCameraSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">GO</button>
              </div>
            </div>
          </div>
        </div>
       
      </div>

      </div>

    
       )}

{data && data.length > 0 && data[0] && (
       <div className="w-full max-w-screen-xl mx-auto mt-16 sm:mt-20 lg:mt-24" style={{ marginTop: '2rem' }}>
        <div className="bg-white pl-20 pt-10 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700  ">

      <div>
      <div class="px-4 sm:px-0">
    <h3 class="text-base font-semibold text-lg leading-7 text-gray-900">Rover Information</h3>
  </div>
  <div class="mt-6 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Rover name</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data[0].rover.name}</dd>
      </div>
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Landing Date</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data[0].rover.landing_date}</dd>
      </div>
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Launch Date</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data[0].rover.launch_date}</dd>
      </div>
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Status</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data[0].rover.status}</dd>
      </div>
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Sol Date</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data[0].sol}</dd>
      </div>
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Earth Date</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data[0].earth_date}</dd>
      </div>
      <div class="px-4 py-2 pb-8 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Camera</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data[0].camera.full_name}</dd>
      </div>
      </dl>
      </div>
      </div>
      </div>
      </div>

)}
       
       {data ? (
  <div className="max-w-5xl mb-10 mx-auto mt-16 sm:mt-20 lg:mt-24">
    {Array.isArray(data) ? (
      <div className="max-w-5xl mb-10 mx-auto mt-16 sm:mt-20 lg:mt-24">
        {data.map((image) => (
          <div  className="mb-10 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className=" flex justify-center items-center bg-no-repeat bg-cover bg-fixed bg-clip-border bg-origin-padding">
                <img src={image.img_src}  style={{ maxHeight: '40rem' }} alt="astronomy picture of the day" />
              </div>
              
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className=" max-w-5xl bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="bg-black bg-no-repeat bg-cover bg-fixed bg-clip-border bg-origin-padding">
            <img src={data.url} alt="astronomy picture of the day" />
          </div>
        </div>
      </div>
    )}
  </div>
) : (
  <div className="text-center">
    <Spinner aria-label="Center-aligned spinner example" size="xl" />
  </div>
)}
          
        
       
      </div>
    );
}
