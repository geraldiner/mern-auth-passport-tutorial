const express = require("express");
const router = express.Router();
const { postSignup, postLogin } = require("../controllers/auth");

// @desc    Process sign up form
// @route   POST /auth/signup
router.use("/signup", postSignup);

// @desc    Process log in form
// @route   POST /auth/login
router.use("/login", postLogin);

module.exports = router;
