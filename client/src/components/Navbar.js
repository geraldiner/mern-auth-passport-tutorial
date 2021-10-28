import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { selectUser, logout } from "../features/appSlice";

const Navbar = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = () => {
		dispatch(logout());
		history.push("/");
	};

	const handleClick = e => {
		if (e.target.innerText === "Home") {
			history.push("/");
		} else if (e.target.innerText === "Dashboard") {
			history.push("/dashboard");
		}
	};

	return (
		<div className="navbar">
			<nav className="navbar__nav">
				<button className="navbar__a" type="button" onClick={handleClick}>
					Home
				</button>
				{!user ? (
					""
				) : (
					<>
						<button type="button" className="navbar__a" onClick={handleClick}>
							Dashboard
						</button>
						<button type="button" className="navbar__a" onClick={handleLogout}>
							Logout
						</button>
					</>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
