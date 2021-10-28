import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import { selectUser } from "./features/appSlice";

/* Components */
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
	const user = useSelector(selectUser);
	const history = useHistory();

	useEffect(() => {
		if (user) {
			history.push("/dashboard");
		}
	}, []);

	return (
		<Router>
			<div className="app">
				<div className="app__body">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/dashboard" component={Dashboard} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
