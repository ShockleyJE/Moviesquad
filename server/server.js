const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const movieRoutes = require("./routes/movies");
const watchlistRoutes = require("./routes/watchlists");
const statsRoutes = require("./routes/stats");
const apiRoutes = require("./routes/api");
const path = require("path");
const cors = require("cors");

require("dotenv").config({ path: "./server/config/.env" });

// Passport config
require(path.join(__dirname, "config", "passport"))(passport);

connectDB();

// old ejs conf
//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "ejs");
//app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(cors());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use("/", mainRoutes);
app.use("/movies", movieRoutes);
app.use("/watchlists", watchlistRoutes);
app.use("/stats", statsRoutes);
app.use("/api", apiRoutes);

// Serve static assets in production for React
if (process.env.NODE_ENV == "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running, you better catch it!");
});
