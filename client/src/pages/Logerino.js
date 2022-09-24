import React from "react";
import Login from "../components/login/Login";
import UnauthedNavbar from "../components/navbar/UnauthedNavbar";
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
          <UnauthedNavbar></UnauthedNavbar>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-full md:w-2/3 self-center max-w-xl lg:max-w-2xl h-full">
            <div className="flex items-center justify-center h-screen">
              <div className="flex justify-center">
                <Login></Login>
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

export default Logerino;
