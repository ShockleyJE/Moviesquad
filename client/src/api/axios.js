import axios from "axios";

export default axios.create({
  //baseURL: "https://moviesquad.net/",
  baseURL: "http://localhost:8080",
  timeout: 10000,
  // I know this is default behavior, but I am making a note so I do not override it
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default
  headers: {
    "Content-type": "application/json",
  },
});
