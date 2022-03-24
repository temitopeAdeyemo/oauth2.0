const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");

passport.use(
  new googleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      secretKey: keys.google.secretKey,
    },
    () => {}
  )
);
