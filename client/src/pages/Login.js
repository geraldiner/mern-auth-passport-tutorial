import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../features/appSlice";
import { useHistory } from "react-router";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();

	const url = "http://localhost:8888/auth/login";
	const twitchUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&redirect_uri=http://localhost:3000/auth/twitch&response_type=code&scope=user:read:email`;

	const handleChange = e => {
		if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "password") {
			setPassword(e.target.value);
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const res = await Axios.post(url, {
				email,
				password,
			});
			if (res.data.success) {
				const user = res.data.user;
				dispatch(
					login({
						name: user.name,
						email: user.email,
					}),
				);
				history.push("/dashboard");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="main">
			<h2>Log in to your account</h2>
			<div className="login">
				<div className="login__form">
					<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
						<div className="rounded-md shadow-sm -space-y-px">
							<div className="input">
								<label htmlFor="email-address" className="sr-only">
									Email address
								</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Email address"
									onChange={e => handleChange(e)}
								/>
							</div>
							<div className="input">
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Password"
									onChange={e => handleChange(e)}
								/>
							</div>
						</div>

						<button type="submit" className="button button-primary">
							Log in
						</button>
					</form>
					<p className="text-white">
						Don't have an account? <Link to="/signup">Sign up!</Link>
					</p>
				</div>
				<div className="login__socials">
					<p className="text-white">Or log in with an existing account</p>

					<a href={twitchUrl} className="button text-white bg-twitch hover:bg-white hover:text-gray-900">
						Log in with Twitch
					</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
