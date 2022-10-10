import React from "react";
import Login from "../components/login/Login";
import Navbar from "../components/navbar/Navbar";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const Logerino = () => {
  const auth = useAuth();
  if (auth.isauthed()) {
    return <Navigate replace to="/watchlists" />;
  }

  return (
    <div className="">
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-full md:w-2/3 self-center max-w-xl lg:max-w-2xl h-full">
            <div className="flex items-center justify-center h-[80vh]">
              <div className="flex justify-center">
                <Login></Login>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full fixed bottom-12 text-center hidden sm:block md:block lg:block">
        <h4 className="inline">designed and built by </h4>
        <a
          className="inline text-blue-400 bold"
          href="https://www.shockleyje.com"
          target="_blank"
        >
          James Shockley
        </a>
      </div>
    </div>
  );
};

export default Logerino;
