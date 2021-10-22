import React from "react";

const Navbar = () => {
	return (
		<div className="navbar">
			<nav className="navbar__nav">
				<a href="/home">Home</a>
				<a href="/dashboard">Dashboard</a>
				<a href="/login">Log In</a>
				<a href="/signup">Sign Up</a>
				<a href="/logout">Log Out</a>
			</nav>
		</div>
	);
};

export default Navbar;
