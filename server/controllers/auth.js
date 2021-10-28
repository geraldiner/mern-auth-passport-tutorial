const User = require("../models/User");

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
};
