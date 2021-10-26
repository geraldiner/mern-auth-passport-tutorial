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
								<label htmlFor="name" className="sr-only">
									Name
								</label>
								<input id="name" name="name" type="text" autoComplete="name" required placeholder="Name" />
							</div>
							<div className="input">
								<label htmlFor="email-address" className="sr-only">
									Email address
								</label>
								<input id="email-address" name="email" type="email" autoComplete="email" required placeholder="Email address" />
							</div>
							<div className="input">
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input id="password" name="password" type="password" autoComplete="current-password" required placeholder="Password" />
							</div>
							<div className="input">
								<label htmlFor="confirm-password" className="sr-only">
									Confirm Password
								</label>
								<input
									id="confirm-password"
									name="confirm-password"
									type="password"
									autoComplete="current-password"
									required
									placeholder="Confirm Password"
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
				<div className="signup__socials">
					<p className="text-white">Or sign up with an existing account</p>

					<button type="button" className="button text-white bg-google hover:bg-white hover:text-gray-900">
						Sign up with Google
					</button>
					<button type="button" className="button text-white bg-twitch hover:bg-white hover:text-gray-900">
						Sign up with Twitch
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
