import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/appSlice";

const Dashboard = ({ history }) => {
	const user = useSelector(selectUser);

	return (
		<div className="main">
			<div className="dashboard">
				<h1>Welcome to your dashboard!</h1>
				<div className="dashboard__body">
					<h2>Hello, {user.name}</h2>
					<p>Here's your info:</p>
					<ul>
						<li>{user.email}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
