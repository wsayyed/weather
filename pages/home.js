import React, { useState } from "react";

const home = (props) => {
  const [wdata, setWdata] = useState(
    JSON.parse(sessionStorage.getItem("weather_data"))
  );
  console.log("props -> ", wdata);
  return (
    <>
      <div className="w-full h-screen font-sans bg-cover bg-landscape">
        <div className="container flex items-center justify-center flex-1 h-full mx-auto">
          {/* Card */}
          <div className="w-11/12 sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6 px-4 py-4 bg-white shadow-lg rounded-lg opacity-70 dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center flex-col mx-auto justify-center h-40 w-full text-6xl rounded-md bg-indigo-500 text-white">
                <div className="pl-4">
                  {wdata ? wdata.data.main.temp : ""}
                  <sup>o</sup>
                </div>
                <div>
                  <h3 className="text-center text-base sm:text-lg text-white font-semibold dark:text-white pt-1">
                    {wdata ? "Humidity " + wdata.data.main.humidity + "%" : ""}
                  </h3>
                </div>
              </div>
              <h3 className="text-center text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                {wdata ? wdata.data.name : ""}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
