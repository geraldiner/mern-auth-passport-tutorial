const express = require("express");

const connectDB = require("./config/db");

require("dotenv").config({ path: "./config/.env" });

connectDB();

// initialize express app
const app = express();
app.use(express.json());

// routes
app.get("/", (req, res) => {
	res.send("Hola soy Dora!");
});

app.use("/auth", require("./routes/auth"));

// start server
app.listen(process.env.PORT, () => {
	console.log(`Server is running!!! Better catch it: http://localhost:${process.env.PORT}`);
});
