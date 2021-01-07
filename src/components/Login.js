import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/Login.css";

function Login() {
	const history = useHistory();
	const [data, setData] = useState({
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
		const localData = JSON.parse(localStorage.getItem("user"));
		const RegEmail = localData.email;
		const RegPass = localData.password;
		console.log(RegEmail);
		console.log(RegPass);

		if (data.email === RegEmail && data.password === RegPass) {
			history.push("/home");
		}
	};

	return (
		<div className="container py-5">
			<h1 className="login_title">Login Page</h1>
			<div className="card border-0 shadow p-4 w-50 mx-auto">
				<form onSubmit={formSubmit}>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input
							name="email"
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							value={data.email}
							onChange={InputEvent}
						/>
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input
							name="password"
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
							value={data.password}
							onChange={InputEvent}
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Login
					</button>
					<h5 className="lineThrough">
						<span>New user?</span>
						<Link to="/register">
							<button className="login__registerButton">
								Create new account
							</button>
						</Link>
					</h5>
				</form>
			</div>
		</div>
	);
}

export default Login;
