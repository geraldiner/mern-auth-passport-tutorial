const axios = require("axios");

const getUserTwitchData = access_token => {
	const twitchRes = axios.get("https://api.twitch.tv/helix/users/", {
		headers: {
			"Authorization": `Bearer ${access_token}`,
			"Client-Id": process.env.TWITCH_CLIENT_ID,
		},
	});
	return twitchRes;
};

module.exports = getUserTwitchData;
