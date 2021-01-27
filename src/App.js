import React from "react";
import { Route } from "react-router-dom";
import WeaponGenWrapper from "./Components/WeaponGenWrapper";
import Navbar from "./Components/Navbar/Navbar";
import Campaign from "./Components/Campaign/Campaign";
import "./CSS/App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* Routes */}
			<Route exact path="/">
				<WeaponGenWrapper />
			</Route>
			<Route path="/campaign">
				<Campaign />
			</Route>
			<footer>Footer Links </footer>
		</div>
	);
}

export default App;
