import React from "react";

const Landing = () => {
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
