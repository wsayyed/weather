import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [ucity, setUcity] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [wdata, setWdata] = useState({});
  const [werr, setWerr] = useState("");

  const getWeather = async () => {
    try {
      setIsloading(true);
      const data = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${ucity}&appid=429736441cf3572838aa10530929f7cd`
      );
      setIsloading(false);
      setWdata(data);
      console.log("data FROM TEST=> ", data);
    } catch (error) {
      setIsloading(false);
      setWerr(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen font-sans bg-cover bg-landscape">
        <div className="container flex items-center justify-center flex-1 h-full mx-auto">
          <div className="w-10/12 md:w-full md:max-w-lg">
            <div className="leading-loose">
              <div className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl">
                <p className="mb-2 text-2xl font-light text-center text-white">
                  Weather
                </p>
                {werr != "" ? (
                  <div
                    class="mb-2 text-sm md:text-md bg-red-200 border-red-600 text-red-600 border-l-4 px-3 py-2"
                    role="alert"
                  >
                    <p class="font-bold">Info</p>
                    <p>{werr}</p>
                  </div>
                ) : null}

                <div className="mb-2">
                  <div className="relative">
                    <input
                      type="text"
                      onChange={(e) => {
                        setUcity(e.currentTarget.value);
                        setWerr("");
                      }}
                      id="login-with-bg-email"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter City Name"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={getWeather}
                    className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                  >
                    {isloading ? (
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="mr-2 animate-spin"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                      </svg>
                    ) : null}
                    Check Weather
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
