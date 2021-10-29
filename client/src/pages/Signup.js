import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { login } from "../features/appSlice";

const Signup = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const dispatch = useDispatch();
	const history = useHistory();

	const url = "http://localhost:8888/auth/signup";
	const twitchUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&redirect_uri=http://localhost:3000/auth/twitch&response_type=code&scope=user:read:email`;

	const handleChange = e => {
		const { name, value } = e.target;
		let copy = formData;
		copy[name] = value;
		setFormData(copy);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			alert("Please make sure passwords match.");
			setFormData({ password: "", confirmPassword: "", ...formData });
		} else {
			try {
				const { name, email, password } = formData;
				const res = await Axios.post(url, {
					name,
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
		}
	};

	return (
		<div className="main">
			<h2>Sign up for an account today!</h2>
			<div className="signup">
				<div className="signup__form">
					<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
						<div className="rounded-md shadow-sm -space-y-px">
							<div className="input">
								<label htmlFor="name" className="sr-only">
									Name
								</label>
								<input id="name" name="name" type="text" autoComplete="name" required placeholder="Name" onChange={handleChange} />
							</div>
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
									placeholder="Email address"
									onChange={handleChange}
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
									placeholder="Password"
									onChange={handleChange}
								/>
							</div>
							<div className="input">
								<label htmlFor="confirmPassword" className="sr-only">
									Confirm Password
								</label>
								<input
									id="confirm-password"
									name="confirmPassword"
									type="password"
									autoComplete="current-password"
									required
									placeholder="Confirm Password"
									onChange={handleChange}
								/>
							</div>
						</div>

						<button type="submit" className="button button-primary">
							Sign up
						</button>
					</form>

					<p className="text-white">
						Already have an account? <Link to="/login">Log in!</Link>
					</p>
				</div>
				<div className="signup__socials">
					<p className="text-white">Or sign up with an existing account</p>

					<a href={twitchUrl} className="button text-white bg-twitch hover:bg-white hover:text-gray-900">
						Sign up with Twitch
					</a>
				</div>
			</div>
		</div>
	);
};

export default Signup;
