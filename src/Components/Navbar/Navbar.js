import React from "react";
import { NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import "../../CSS/nav.css";

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar__links--container">
				<NavLink to="/" className="navbar__link">
					Home
				</NavLink>
				<NavLink to="/campaign" className="navbar__link">
					Campaign
				</NavLink>
				<NavLink to="/generators" className="navbar__link">
					Generators
				</NavLink>
				<NavLink to="/donate" className="navbar__link">
					Donate
				</NavLink>
				<NavLink to="/about" className="navbar__link">
					About
				</NavLink>
			</div>
			<SignUpForm />
		</div>
	);
}
