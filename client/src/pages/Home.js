import React from "react";
import UnauthedNavbar from "../components/navbar/UnauthedNavbar";
import { useState, useEffect } from "react";

const Home = () => {
  const [what, setWhat] = useState("movie nights");
  const [counter, setCounter] = useState(0);
  //toggle this to turn on the whatis update
  const [isActive, setIsActive] = useState(false);
  const WHAT_IS_MOVIESQUAD = ["movie nights", "watch parties", "film showings"];

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setCounter((counter) => counter + 1);
        whatIs();
      }, 5000);
    } else if (!isActive && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, counter]);

  const whatIs = () => {
    let mod = counter % 3;
    setWhat(WHAT_IS_MOVIESQUAD[mod]);
  };

  return (
    <div className="">
      <div>
        <div>
          <UnauthedNavbar></UnauthedNavbar>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-full md:w-2/3 self-center max-w-xl lg:max-w-2xl h-full">
            {/* <div className="mt-80">
              <div className="flex justify-center">
                <h1 className="text-2xl bold">
                  <b>Moviesquad</b> is seemless by default
                </h1>
              </div>
              <div className="flex justify-center">
                <div className="text-5xl text-center text-gray-700">
                  <h2 className=" text-center inline">Welcome to better </h2>
                  <span className="inline">{what}</span>
                  <h2 className="inline"> where </h2>
                  <h2 className="text-black inline font-bold">
                    your squad comes first
                  </h2>
                </div>
              </div>
            </div> */}
            <div class="flex items-center justify-center h-screen">
              <div className="flex-row">
                <div className="flex justify-center">
                  <h1 className="text-2xl bold">
                    <b>Moviesquad</b> is seemless by default
                  </h1>
                </div>
                <div className="flex justify-center">
                  <div className="text-5xl text-center text-gray-700">
                    <h2 className=" text-center inline">Welcome to better </h2>
                    <span className="inline">{what}</span>
                    <h2 className="inline"> where </h2>
                    <h2 className="text-black inline font-bold">
                      your squad comes first
                    </h2>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full fixed bottom-20 text-center ">
        <h4 className="inline">designed and built by </h4>
        <a
          className="inline text-blue-700"
          href="https://www.shockleyje.com"
          target="_blank"
        >
          James Shockley
        </a>
      </div>
    </div>
  );
};

export default Home;
