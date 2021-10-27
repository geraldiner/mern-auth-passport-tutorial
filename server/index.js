const express = require("express");
const cors = require("cors");
const passport = require("passport");

const connectDB = require("./config/db");

require("dotenv").config({ path: "./config/.env" });
require("./config/passport")(passport);

connectDB();

// initialize express app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use(passport.initialize());

// routes
app.use("/auth", require("./routes/auth"));

// start server
app.listen(process.env.PORT, () => {
	console.log(`Server is running!!! Better catch it: http://localhost:${process.env.PORT}`);
});
