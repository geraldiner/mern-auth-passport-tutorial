module.exports = {
	purge: ["./src/**/*.html", "./src/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				blurple: {
					"light": "#b9b6d3",
					"DEFAULT": "#6055a5",
					"dark": "#3e3c49",
				},
				mint: {
					"DEFAULT": "#38cc8c",
				},
				google: {
					"DEFAULT": "#4285f4",
				},
				twitch: {
					"DEFAULT": "#9146ff",
				},
			},
		},
	},
	variants: {},
	plugins: [require("@tailwindcss/custom-forms")],
};
