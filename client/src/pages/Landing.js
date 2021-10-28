import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "../features/appSlice";

const Landing = () => {
	const user = useSelector(selectUser);
	const history = useHistory();

	useEffect(() => {
		if (user) {
			history.push("/dashboard");
		}
	}, []);

	return (
		<div className="main">
			<div className="landing">
				<div className="landing__desc">
					<h1>Welcome to the landing page!</h1>
					<p>Please log in or sign up to see your dashboard.</p>
				</div>
				<div className="landing__buttons">
					<a href="/login" className="button button-primary">
						Log In
					</a>
					<a href="/signup" className="button button-outline">
						Sign Up
					</a>
				</div>
			</div>
		</div>
	);
};

export default Landing;
