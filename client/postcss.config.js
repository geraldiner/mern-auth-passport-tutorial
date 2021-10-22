const cssnano = require("cssnano");
module.exports = {
	plugins: [require("postcss-import"), cssnano({ preset: "default" }), require("tailwindcss"), require("autoprefixer")],
};
