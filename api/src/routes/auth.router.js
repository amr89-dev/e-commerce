const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { JWT_SECRET } = process.env;

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

      const token = jwt.sign(payload, JWT_SECRET);
      res.json({ user, token });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
