import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../features/appSlice";

const Navbar = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

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
						<a className="navbar__a" href="/" onClick={handleLogout}>
							Logout
						</a>
					</>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
