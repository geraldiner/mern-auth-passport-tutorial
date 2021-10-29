const User = require("../models/User");
const axios = require("axios");
const crypto = require("crypto");

const getUserTwitchData = require("../utils/getUserTwitchData");

module.exports = {
	postSignup: async (req, res, next) => {
		const { name, email, password } = req.body;
		try {
			let user = await User.findOne({ email }).exec();
			if (user) {
				res.status(401).json({ success: false, message: "An account with this email already exists" });
			} else {
				user = await User.create({
					name,
					email,
					password,
				});
				res.status(201).json({ success: true, user: { name: user.name, email: user.email } });
			}
		} catch (error) {
			next(error);
		}
	},
	postLogin: async (req, res, next) => {
		const { email, password } = req.body;
		if (!email) {
			res.status(400).json({ "message": "Please provide an email." });
		} else if (!password) {
			res.status(400).json({ "message": "Please provide a password." });
		} else {
			const user = await User.findOne({ email }).exec();
			if (user) {
				const isMatch = await user.comparePassword(password);
				if (isMatch) {
					const { name, email } = user;
					res.status(200).json({ success: true, user: { name, email } });
				} else {
					res.status(400).json({ success: false, message: "Password is incorrect" });
				}
			} else {
				res.status(400).json({ success: false, message: "There is no account with this email" });
			}
		}
	},
	processTwitchLogin: async (req, res, next) => {
		const { code } = req.body;
		if (code) {
			try {
				const url = `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&code=${code}&grant_type=authorization_code&redirect_uri=http://localhost:3000/dashboard`;
				const twitchRes = await axios.post(url);
				const { access_token, expires_in, refresh_token, scope, token_type } = twitchRes.data;
				const twitchFetchRes = await getUserTwitchData(access_token);
				const twitchData = twitchFetchRes.data.data[0];
				const email = twitchData.email;
				const name = twitchData.display_name;
				const twitchUserData = {
					id: twitchData.id,
					login: twitchData.login,
					description: twitchData.description,
					profileImageUrl: twitchData.profile_image_url,
				};
				try {
					let user = await User.findOne({ email }).exec();
					if (user) {
						res.status(200).json({ success: true, user: { name: user.name, email: user.email, twitchData: twitchUserData } });
					} else {
						const password = crypto.randomBytes(10).toString("hex");
						user = await User.create({
							name,
							email,
							password,
							twitchData: twitchUserData,
						});
						res.status(201).json({ success: true, user: { name: user.name, email: user.email, twitchData: twitchUserData } });
					}
				} catch (error) {
					next(error);
				}
			} catch (error) {
				next(error);
			}
		}
	},
};
