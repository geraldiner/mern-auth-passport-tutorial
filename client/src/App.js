import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login } from "./features/appSlice";

/* Components */
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user) {
			dispatch(
				login({
					name: user.name,
					email: user.email,
				}),
			);
		}
	}, []);

	return (
		<Router>
			<div className="app">
				<div className="app__body">
					<Navbar />
					{!user ? (
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/signup" component={Signup} />
						</Switch>
					) : (
						<Switch>
							<Route exact path="/dashboard" component={Dashboard} />
						</Switch>
					)}
				</div>
			</div>
		</Router>
	);
};

export default App;
