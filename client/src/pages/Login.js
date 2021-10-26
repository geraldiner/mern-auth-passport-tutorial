import React from "react";

const Login = () => {
	return (
		<div className="main">
			<h2>Log in to your account</h2>
			<div className="login">
				<div className="login__form">
					<form className="mt-8 space-y-6" action="#" method="POST">
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
								/>
							</div>
						</div>

						<button type="submit" className="button button-primary">
							Log in
						</button>
					</form>
					<p className="text-white">
						Don't have an account? <a href="/signup">Sign up!</a>
					</p>
				</div>
				<div className="login__socials">
					<p className="text-white">Or log in with an existing account</p>

					<button type="button" className="button text-white bg-google hover:bg-white hover:text-gray-900">
						Log in with Google
					</button>
					<button type="button" className="button text-white bg-twitch hover:bg-white hover:text-gray-900">
						Log in with Twitch
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;