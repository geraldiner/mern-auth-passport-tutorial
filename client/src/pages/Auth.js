import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { login } from "../features/appSlice";

const Auth = () => {
	const search = useLocation().search;
	const code = new URLSearchParams(search).get("code");
	const dispatch = useDispatch();
	const history = useHistory();

	const [isLoading, setIsLoading] = useState(true);

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
							user: user.name,
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
		processTwitchLogin();
	}, [isLoading]);

	return (
		<>
			{isLoading ? (
				<h1>Sorry, still loading</h1>
			) : (
				<div>
					<h1>And we're here now</h1>{" "}
				</div>
			)}
		</>
	);
};

export default Auth;
