import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/appSlice";

const Navbar = () => {
	const user = useSelector(selectUser);

	return (
		<div className="navbar">
			<nav className="navbar__nav">
				{!user ? (
					<a className="navbar__a" href="/">
						Home
					</a>
				) : (
					<>
						<a className="navbar__a" href="/dashboard">
							Dashboard
						</a>
						<a className="navbar__a" href="/logout">
							Logout
						</a>
					</>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
