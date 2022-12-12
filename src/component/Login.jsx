
import React from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/userContext";

const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { logIn } = useUserContext();
	const onSubmit = (data) => {
		logIn(data.username);
		console.log("Form data", data);
	};
	console.log(errors);

	return (
		<div className="login">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Login</h1>
				<div className="ui divider"></div>
				<div className="ui form">
					<div className="field">
						<label>Username</label>
						<input
							type="text"
							name="username"
							placeholder="Username"
							{...register('username',
								{ required: "Username is required" })}
						/>
					</div>
					<p>{errors.username?.message}</p>
					<div className="field">
						<label>Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							{...register('password', {
								required: "Password is required",
								minLength: {
									value: 4,
									message: "Password must be more than 4 characters",
								},
								maxLength: {
									value: 10,
									message: "Password cannot exceed more than 10 characters",
								},
							})}
						/>
					</div>
					<p>{errors.password?.message}</p>
					<button className="fluid ui button blue">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default Login;