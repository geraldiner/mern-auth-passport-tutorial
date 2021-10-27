import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/appSlice";

const Landing = ({ history }) => {
	const user = useSelector(selectUser);
	console.log("landing", user);
	useEffect(() => {
		if (user) {
			console.log(user);
			history.push("/dashboard");
		}
	}, [user, history]);
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
