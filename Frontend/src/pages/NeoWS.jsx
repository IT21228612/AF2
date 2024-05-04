import React, { useEffect, useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user_ReduxSlice';

export default function NeoWS() {
  const [data, setData] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  // Set isLoggedIn based on whether currentUser exists or not
  const { currentUser } = useSelector((state) => state.user);
  const isLoggedIn = !!currentUser;


  const fetchAPIData = async (params) => {
    setIsLoading(true); // Set isLoading to true when starting fetching data
    const NASA_KEY = "yFTaevyt3ZE0WKrZzVaiSMqswvhwFm1gpdu4PVU4";
    const url = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${NASA_KEY}${params}`;
    try {
      const res = await fetch(url);
      const responseData = await res.json();
  
      // Access the near_earth_objects property from the response data
      const nearEarthObjects = responseData.near_earth_objects;
  
      // Initialize an array to store the formatted data
      const formattedData = [];
  
      // Iterate over each date in near_earth_objects
      Object.keys(nearEarthObjects).forEach((date) => {
        // Iterate over each object for the current date
        nearEarthObjects[date].forEach((object) => {
          // Extract the required fields from the object
          const formattedObject = {
            id: object.id,
            name: object.name,
            estimated_diameter_meters: {
              min: object.estimated_diameter.meters.estimated_diameter_min,
              max: object.estimated_diameter.meters.estimated_diameter_max
            },
            is_potentially_hazardous_asteroid: object.is_potentially_hazardous_asteroid,
            close_approach_date: object.close_approach_data[0].close_approach_date,
            miss_distance: object.close_approach_data[0].miss_distance
          };
          // Push the formatted object into the array
          formattedData.push(formattedObject);
        });
      });
  
      // Update the state with the formatted data
      setData(formattedData);
  
      console.log("Formatted Data\n", formattedData);
    } catch (err) {
      console.log(err.message);
    }finally {
        setIsLoading(false); // Set isLoading to false when fetching data is finished
      }
  };
  

  useEffect(() => {
    // Get current date
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD

  // Get yesterday's date
  const yesterdayDate = new Date(currentDate);
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterdayDateString = yesterdayDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD

  // Fetch data with the current date and tomorrow's date
  fetchAPIData(`&start_date=${yesterdayDateString}&end_date=${currentDateString}`);
  }, []);


  const handleDateRangeSubmit = () => {
    fetchAPIData(`&start_date=${startDate}&end_date=${endDate}`);
    // Reset all input fields
    
  };
  
  //sort array data
  const sortBy = (key, reverse = false) => {
    const sortedData = [...data].sort((a, b) => {
      let comparison = 0;
      if (a[key] > b[key]) {
        comparison = 1;
      } else if (a[key] < b[key]) {
        comparison = -1;
      }
      return reverse ? comparison * -1 : comparison;
    });
    setData(sortedData);
  };
  


  return (
    <div className="flex flex-col space-y-4 px-5 py-8">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Asteroids - NeoWs</Breadcrumb.Item>
      </Breadcrumb>
      {isLoggedIn && ( // Render only if isLoggedIn is true
      <div className="w-4/5 max-w-screen-xl mx-auto mt-16 mb-10 sm:mt-20 lg:mt-24" style={{ marginTop: '2rem', marginBottom:'1px' }}>
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg  ">
          <div className="p-6">
            <div className="grid grid-cols-1 gap-10">
             
              {/* Column 2: Pick a date range */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Pick a Date Range</h5>
                <div className="grid grid-cols-2 gap-10">
                  <input
                    type="date"
                    className="mt-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <input
                    type="date"
                    className="mt-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div >
                <div className="text-center">
                  <button onClick={handleDateRangeSubmit} className="mt-4 w-1/7 px-20 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    {isLoading ? <Spinner aria-label="Center-aligned spinner example" size="md" color="white" /> : "GO"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       )}
      {data ? (
  <div >
     {/* display data in a table */}
     <table className="table-auto w-full">
    <thead>
      <tr>
        <th className="border px-4 py-2 bg-gray-200">#</th>
        <th className="border px-4 py-2 bg-gray-200">ID</th>
        <th className="border px-4 py-2 bg-gray-200">Name</th>
        <th className="border px-4 py-2 bg-gray-200">Min Diameter (m)</th>
        <th className="border px-4 py-2 bg-gray-200">Max Diameter (m)</th>
        <th className="border px-4 py-2 bg-gray-200">Potentially Hazardous</th>
        <th className="border px-4 py-2 bg-gray-200">Close Approach Date</th>
        <th className="border px-4 py-2 bg-gray-200">Miss Distance</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td className="border px-4 py-2">{index + 1}</td>  
          <td className="border px-4 py-2">{item.id}</td>
          <td className="border px-4 py-2">{item.name}</td>
          <td className="border px-4 py-2">{item.estimated_diameter_meters.min}</td>
          <td className="border px-4 py-2">{item.estimated_diameter_meters.max}</td>
          <td className="border px-4 py-2">{item.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</td>
          <td className="border px-4 py-2">{item.close_approach_date}</td>
          <td className="border px-4 py-2">{item.miss_distance.kilometers} km</td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
) : (
  <div className="text-center">
    <Spinner aria-label="Center-aligned spinner example" size="xl" />
  </div>
)}

    </div>
  );
}
