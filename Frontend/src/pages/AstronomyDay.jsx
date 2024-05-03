import React, { useEffect, useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user_ReduxSlice';

export default function AstronomyDay() {
  const [data, setData] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [count, setCount] = useState(0);

  // Set isLoggedIn based on whether currentUser exists or not
  const { currentUser } = useSelector((state) => state.user);
  const isLoggedIn = !!currentUser;


  const fetchAPIData = async (params) => {
    const NASA_KEY = "yFTaevyt3ZE0WKrZzVaiSMqswvhwFm1gpdu4PVU4";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}${params}`;
    try {
      const res = await fetch(url);
      const apidata = await res.json();
      if (Array.isArray(apidata)) {
        setData(apidata);
      } else {
        setData([apidata]);
      }
      console.log("DATA\n", apidata);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    // Fetch default data (today's image)
    fetchAPIData("");
  }, []);

  const handleSingleDateSubmit = () => {
    fetchAPIData(`&date=${startDate}`);
    // Reset all input fields
    setStartDate("");
    setEndDate("");
    setCount(0);
  };

  const handleDateRangeSubmit = () => {
    fetchAPIData(`&start_date=${startDate}&end_date=${endDate}`);
    // Reset all input fields
    setStartDate("");
    setEndDate("");
    setCount(0);
  };

  const handleCountSubmit = () => {
    fetchAPIData(`&count=${count}`);
    // Reset all input fields
    setStartDate("");
    setEndDate("");
    setCount(0);
  };

  return (
    <div className="flex flex-col space-y-4 px-5 py-8">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/feature">Feature</Breadcrumb.Item>
        <Breadcrumb.Item>APOD</Breadcrumb.Item>
      </Breadcrumb>
      {isLoggedIn && ( // Render only if isLoggedIn is true
      <div className="w-full max-w-screen-xl mx-auto mt-16 sm:mt-20 lg:mt-24" style={{ marginTop: '2rem' }}>
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg  ">
          <div className="p-6">
            <div className="grid grid-cols-3 gap-12">
              {/* Column 1: Pick a date */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Pick a Date</h5>
                <input
                  type="date"
                  className="mt-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  placeholder="YYYY-MM-DD"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <button onClick={handleSingleDateSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">GO</button>
              </div>
              {/* Column 2: Pick a date range */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Pick a Date Range</h5>
                <div className="grid grid-cols-2 gap-2">
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
                </div>
                <button onClick={handleDateRangeSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">GO</button>
              </div>
              {/* Column 3: Select image count */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Select Image Count</h5>
                <input
                  type="number"
                  min="1"
                  className="mt-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  placeholder="Image Count"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
                <button onClick={handleCountSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">GO</button>
              </div>
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
          <div key={image.date} className="mb-10 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className=" flex justify-center items-center bg-no-repeat bg-cover bg-fixed bg-clip-border bg-origin-padding">
                <img src={image.url}  style={{ maxHeight: '40rem' }} alt="astronomy picture of the day" />
              </div>
              <div className="mt-6">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {image.title}
                </h5>
                <h5 className="mt-4 text-sm font-semibold tracking-tight text-blue-800 dark:text-white">
                  {image.date}
                </h5>
                <p className="mt-2 text-gray-700 dark:text-gray-400 text-justify">
                  {image.explanation}
                </p>
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
          <div className="mt-6">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>
            <h5 className="mt-4 text-sm font-semibold tracking-tight text-blue-800 dark:text-white">
              {data.date}
            </h5>
            <p className="mt-2 text-gray-700 dark:text-gray-400 text-justify">
              {data.explanation}
            </p>
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
