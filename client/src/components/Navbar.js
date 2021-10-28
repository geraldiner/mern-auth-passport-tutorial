import React from "react";

const Navbar = () => {
	return (
		<div className="navbar">
			<nav className="navbar__nav">
				<a className="navbar__a" href="/">
					Home
				</a>
				<a className="navbar__a" href="/dashboard">
					Dashboard
				</a>
				<a className="navbar__a" href="/">
					Logout
				</a>
			</nav>
		</div>
	);
};

export default Navbar;
