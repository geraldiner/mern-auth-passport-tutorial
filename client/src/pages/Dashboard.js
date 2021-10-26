import React from "react";

const Dashboard = () => {
	return (
		<div className="main">
			<div className="dashboard">
				<h1>Welcome to your dashboard!</h1>
				<div className="dashboard__body">
					<h2>Hello, Name</h2>
					<p>Here's your info:</p>
					<ul className="list-disc">
						<li>Username: username</li>
						<li>Email: email</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
