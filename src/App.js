import React from "react";
import { Route } from "react-router-dom";
import WeaponGenWrapper from "./Components/Generators/WeaponGenerator/WeaponGenWrapper";
import Navbar from "./Components/Navbar/Navbar";
import Campaign from "./Components/Campaign/Campaign";
import About from "./Components/About/About";
import Donate from "./Components/Donate/Donate";
import Home from "./Components/Home/Home";
import "./CSS/App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* Routes */}
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/campaign">
				<Campaign />
			</Route>
			<Route path="/generators">
				<WeaponGenWrapper />
			</Route>
			<Route path="/donate">
				<Donate />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<footer>Footer Links </footer>
		</div>
	);
}

export default App;
