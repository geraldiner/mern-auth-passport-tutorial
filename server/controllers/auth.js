const User = require("../models/User");

module.exports = {
	postSignup: async (req, res, next) => {
		const { name, email, password } = req.body;

		try {
			const user = await User.create({
				name,
				email,
				password,
			});
			const token = await user.getSignedToken();
			res.status(201).json({ success: true, token });
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
		}
		try {
			const user = await User.findOne({ email }).select("+password");
			if (!user) {
				res.status(404).json({ "message": "Invalid credentials." });
			} else {
				const isMatch = await user.comparePassword(password);
				if (!isMatch) {
					res.status(401).json({ "message": "Invalid credentials." });
				} else {
					const token = await user.getSignedToken();
					res.status(200).json({ success: true, token });
				}
			}
		} catch (error) {
			next(error);
		}
		res.status(200).json({ data: { "message": "login route" } });
	},
};
