import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import axios from "../../api/axios";
import { useAuth } from "../../context/AuthProvider";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const SIGNUP_URL = "signup";

  const firstNameRef = useRef();
  const errRef = useRef();

  const auth = useAuth();

  const [errorMsg, setErrMsg] = useState(null);
  const [authAttempt, setAuthAttempt] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Put focus on email field initially
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  // clear errors if user modifies errored field
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  if (auth.isauthed()) {
    return <Navigate replace to="/watchlists" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let options = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        confirmPassword: confirmPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          userName,
          confirmPassword,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response) {
        setAuthAttempt(response.data);
      }
      if (authAttempt._id != undefined) {
        auth.login(authAttempt);
      } else if (authAttempt.error) {
        console.log(authAttempt.error);
        setErrMsg(authAttempt.error);
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
          <h2 className="text-3xl text-grey-700">Sign up</h2>
          <p ref={errRef} className={errorMsg ? "text-red-600" : "hidden"}>
            {errorMsg}
          </p>
          <div>
            <label
              for="firstName"
              class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-800"
            >
              First name
            </label>
            <input
              ref={firstNameRef}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="firstName"
              id="firstName"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-600 dark:text-gray-700"
              placeholder="shake"
              required
              value={firstName}
            />
          </div>
          <div>
            <label
              for="lastName"
              class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-800"
            >
              Last name
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              name="lastName"
              id="lastName"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-600 dark:text-gray-700"
              placeholder="zula"
              required
              value={lastName}
            />
          </div>
          <div>
            <label
              for="lastName"
              class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-800"
            >
              User name
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="userName"
              id="userName"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-600 dark:text-gray-700"
              placeholder="TheMicRulah"
              required
              value={userName}
            />
          </div>
          <div>
            <label
              for="email"
              class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-800"
            >
              Your email
            </label>
            <input
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
          <div>
            <label
              for="password"
              class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-900"
            >
              Your password
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-600 dark:text-gray-700"
              required
              value={confirmPassword}
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gradient-to-r from-purple-500 to-pink-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-900">
            Registered?{" "}
            <Link
              to="/login"
              class="text-blue-700 hover:underline dark:text-blue-500"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
