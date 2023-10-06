const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { JWT_SECRET, JWT_REFRESH_SECRET } = process.env;

const sign = (payload, isAccessToken) => {
  return jwt.sign(payload, isAccessToken ? JWT_SECRET : JWT_REFRESH_SECRET, {
    expiresIn: 3600,
  });
};
const generateAccessToken = (payload) => sign(payload, true);
const generateRefreshToken = (payload) => sign(payload, false);

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        role: user.role,
        sub: user.id,
      };

      const accesToken = await generateAccessToken(payload);
      const refreshToken = await generateRefreshToken(payload);
      res.json({ user, accesToken, refreshToken });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/token",

  async (req, res, next) => {
    try {
      const token = req.headers;

      res.json({ token });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
