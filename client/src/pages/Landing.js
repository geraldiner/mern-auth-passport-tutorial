import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/appSlice";

const Landing = () => {
	const user = useSelector(selectUser);
	const history = useHistory();

	useEffect(() => {
		if (user) {
			history.push("/dashboard");
		}
	});
	return (
		<div className="main">
			<div className="landing">
				<div className="landing__desc">
					<h1>Welcome to the landing page!</h1>
					<p>Please log in or sign up to see your dashboard.</p>
				</div>
				<div className="landing__buttons">
					<Link to="/login" className="button button-primary">
						Log In
					</Link>
					<Link to="/signup" className="button button-outline">
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Landing;
