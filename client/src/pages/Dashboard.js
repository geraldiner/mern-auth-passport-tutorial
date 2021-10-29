import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { selectUser, login } from "../features/appSlice";

const Dashboard = () => {
	const user = useSelector(selectUser);
	const [isLoading, setIsLoading] = useState(true);
	const search = useLocation().search;
	const code = new URLSearchParams(search).get("code");
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		const processTwitchLogin = async () => {
			try {
				const res = await Axios.post("http://localhost:8888/auth/twitch/callback", {
					code,
				});
				if (res.data.success) {
					const user = res.data.user;
					dispatch(
						login({
							name: user.name,
							email: user.email,
							twitchData: user.twitchData,
						}),
					);
					setIsLoading(true);
					history.push("/dashboard");
				}
			} catch (error) {
				console.log(error);
			}
		};
		if (code) {
			processTwitchLogin();
		} else if (user) {
			setIsLoading(false);
		} else {
			history.push("/");
		}
	}, [isLoading]);

	return (
		<div className="main">
			<div className="dashboard">
				<h1>Welcome to your dashboard!</h1>

				<div className="dashboard__body">
					{isLoading && !user && <h2>Logging you in...</h2>}
					{user && (
						<>
							<h2>Hello, {user.name}</h2>
							<p>Here's your info:</p>
							<ul>
								<li>Email: {user.email}</li>
							</ul>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
