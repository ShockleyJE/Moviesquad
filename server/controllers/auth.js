const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const cloudinary = require("../middleware/cloudinary");

// redirect to showlist if logged in, otherwise back to root
exports.getLogin = (req, res) => {
  // Check to see if user is logged in, if so, redirect to showlist page
  if (req.user) {
    return res.redirect("/watchlists");
  }
  res.render("login", {
    title: "Login",
  });
};

exports.postLogin = (req, res, next) => {
  // initialize an array to contain the validation errors that occur
  // validate each field, and if the check fails push the message
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  // Check if validation errors exist, if so, display them
  if (validationErrors.length) {
    console.log(`validation errors:`);
    validationErrors.map((ele) => console.log(ele));
    return res.end(JSON.stringify({ error: validationErrors.pop() }));
  }
  // use the normalizeEmail function in the validator module to do something for the email?
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    // Check if user is NOT logged in.
    // If so, flash error, redirect to login
    if (!user) {
      console.log(`login error for login`);
      return res.end(JSON.stringify({ error: "Login failed" }));
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      delete user.password;
      console.log("successful authentication");
      res.end(JSON.stringify(user));
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout(() => {
    console.log("User has logged out.");
  });
  // Destroy session & redirect to main page
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.end({ status: success });
  });
};

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.end(JSON.stringify(user));
  }
  res.end(JSON.stringify({ message: "Please sign up or log in" }));
};

exports.postSignup = (req, res, next) => {
  const validationErrors = [];

  if (validator.isEmpty(req.body.firstName))
    validationErrors.push({ message: "Please enter a valid first name." });
  if (validator.isEmpty(req.body.lastName))
    validationErrors.push({ message: "Please enter a valid last name." });
  if (validator.isEmpty(req.body.userName))
    validationErrors.push({ message: "Please enter a valid username." });
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ message: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      message: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ message: "Passwords do not match" });

  if (validationErrors.length) {
    validationErrors.map((ele) => console.log(ele));
    return res.end(JSON.stringify({ error: validationErrors.pop() }));
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  User.findOne(
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        res.end(
          JSON.stringify({
            error:
              "Account with that email address or username already exists.",
          })
        );
      }
      user.save((err) => {
        if (err) {
          return next(err);
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          //TODO: Include cloudinary upload workflow of prof picture
          delete user.password;
          console.log("successful signup");
          return res.end(JSON.stringify(user));
        });
      });
    }
  );
};
