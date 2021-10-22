import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
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
