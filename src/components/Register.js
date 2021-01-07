import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Register.css";

function Register() {
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const InputEvent = (event) => {
		const { name, value } = event.target;
		setData((preVal) => {
			return {
				...preVal,
				[name]: value,
			};
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		alert(
			`My name is ${data.name}.email is ${data.email}, Here is what i want to say ${data.password}`
		);
	};
	useEffect(() => {
		const localData = localStorage.getItem("user");
		return localData ? setData(JSON.parse(localData)) : [];
	}, []);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(data));
	});

	return (
		<div className="container py-5">
			<h1 className="login_title">Registration Page</h1>
			<div className="card border-0 shadow p-4 w-50 mx-auto">
				<form onSubmit={formSubmit}>
					<div className="form-group">
						<label htmlFor="fullname">Full Name</label>
						<input
							name="name"
							type="text"
							className="form-control"
							id="name"
							value={data.name}
							onChange={InputEvent}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input
							name="email"
							type="email"
							className="form-control"
							id="email"
							value={data.email}
							onChange={InputEvent}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							name="password"
							type="password"
							className="form-control"
							id="password"
							value={data.password}
							onChange={InputEvent}
						/>
					</div>

					<button className="btn btn-primary" type="submit">
						Register
					</button>
					<h5 className="lineThrough">
						<span>ALready registered?</span>
						<Link to="/">
							<button className="login__registerButton">Login</button>
						</Link>
					</h5>
				</form>
				<h2></h2>
			</div>
		</div>
	);
}

export default Register;
