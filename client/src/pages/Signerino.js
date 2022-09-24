import React from "react";
import UnauthedNavbar from "../components/navbar/UnauthedNavbar";
import Signup from "../components/signup/Signup";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const Signerino = () => {
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
              <div className="flex "></div>
              <div className="flex justify-center">
                <Signup></Signup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signerino;
