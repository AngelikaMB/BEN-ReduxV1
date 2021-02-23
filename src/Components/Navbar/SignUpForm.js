import React, { useState } from "react";

const initialState = {
	username: "",
	password: "",
};

export default function SignUpForm() {
	const [formValues, setFormValues] = useState(initialState);

	const onSubmit = (e) => {
		e.preventDefault();
	};

	const onChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	return (
		<div className="navbar__form--container">
			<form onSubmit={onSubmit} className="navbar__form">
				<label className="navbar__form--label">
					Username:
					<input
						name="username"
						type="text"
						placeholder="Enter your username"
						value={formValues.username}
						onChange={onChange}
						className="navbar__form--input"
					/>
				</label>

				<label className="navbar__form--label">
					Password:
					<input
						name="password"
						type="text"
						placeholder="Enter your password"
						value={formValues.password}
						onChange={onChange}
						className="navbar__form--input"
					/>
				</label>
			</form>
			<button className="btn navbar__btn">Log In</button>
			<button className="btn navbar__btn">Sign Up</button>
		</div>
	);
}
