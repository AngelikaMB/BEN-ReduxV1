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
		<div className="form__container">
			<form onSubmit={onSubmit} className="form">
				<label className="form__label">
					Username:
					<input
						name="username"
						type="text"
						placeholder="enter your username"
						value={formValues.username}
						onChange={onChange}
						className="form__input"
					/>
				</label>

				<label className="form__label">
					Password:
					<input
						name="password"
						type="text"
						placeholder="enter your password"
						value={formValues.password}
						onChange={onChange}
						className="form__input"
					/>
				</label>
			</form>
			<button className="btn navbar__btn">Log In</button>
			<button className="btn navbar__btn">Sign Up</button>
		</div>
	);
}
