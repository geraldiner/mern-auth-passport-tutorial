import React from "react";

const Signup = () => {
	return (
		<div className="main">
			<h2>Sign up for an account today!</h2>
			<div className="signup">
				<div className="signup__form">
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
							Sign up
						</button>
					</form>

					<p className="text-white">
						Already have an account? <a href="/login">Log in!</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signup;
