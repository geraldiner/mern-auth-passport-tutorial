const express = require("express");
const router = express.Router();
const { postSignup, postLogin, getTwitchLogin, processTwitchLogin } = require("../controllers/auth");

// @desc    Process sign up form
// @route   POST /auth/signup
router.post("/signup", postSignup);

// @desc    Process log in form
// @route   POST /auth/login
router.post("/login", postLogin);

// @desc    Process twitch login
// @route   post /auth/twitch/callback
router.post("/twitch/callback", processTwitchLogin);

module.exports = router;
