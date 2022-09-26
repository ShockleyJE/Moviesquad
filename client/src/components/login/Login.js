import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import Logo from "../logo/Logo";
import axios from "../../api/axios";

const Login = () => {
  const LOGIN_URL = "login";

  const userRef = useRef();
  const errRef = useRef();

  const auth = useAuth();

  const [errorMsg, setErrMsg] = useState(null);
  const [authAttempt, setAuthAttempt] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Put focus on email field initially
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // clear errors if user modifies errored field
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      try {
        if (response.data._id != undefined) {
          auth.login(response.data);
        } else if (response.data.error) {
          console.log(response.data.error);
          setErrMsg(response.data.error);
        }
      } catch (err) {
        console.log(err);
      }
      //set the focus back for screenreaders
      errRef.current.focus();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="max-w-4xl mx-auto">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-3xl p-4 sm:p-8 lg:p-12 dark:bg-white dark:border-gray-300">
        <form class="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-3xl text-grey-700 dark:text-gray-800">Sign in</h2>
          <p ref={errRef} className={errorMsg ? "text-red-600" : "hidden"}>
            {errorMsg}
          </p>
          <div>
            <label
              for="email"
              class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-800"
            >
              Your email
            </label>
            <input
              ref={userRef}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-600 dark:text-gray-700"
              placeholder="name@company.com"
              required
              value={email}
            />
          </div>
          <div>
            <label
              for="password"
              class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-900"
            >
              Your password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-600 dark:text-gray-700"
              required
              value={password}
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gradient-to-r from-purple-500 to-pink-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-900">
            Not registered?{" "}
            <Link
              to="/signup"
              class="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
