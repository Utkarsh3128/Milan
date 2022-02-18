import React, { useState } from "react";
import { FcHome } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { RegisterUser } from "../../service/MilanApi";

//* The styles for Login and Register are essentially same
import "../../styles/UserLogin.css";

function UserRegister() {
	const navigate = useNavigate();

	function UserImage() {
		return (
			<div className="col-md-8 col-lg-7 col-xl-6">
				<img
					className="img-fluid"
					alt="Phone"
					style={{ width: "auto" }}
					src="https://www.getillustrations.com/packs/plastic-illustrations-scene-builder-pack/scenes/_1x/accounts%20_%20man,%20workspace,%20desk,%20laptop,%20login,%20user_md.png"
				></img>
			</div>
		);
	}

	function Anchor(props) {
		return (
			<div>
				<p>
					{props.para}
					<Link to={props.link}>{props.details}</Link>
				</p>
			</div>
		);
	}

	const [credentials, setCredentials] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		address: "",
		pincode: "",
	});

	const [isEmailValid, setIsEmailValid] = useState(false);

	const handleChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
		if (
			e.target.name === "email" &&
			e.target.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
		)
			setIsEmailValid(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(credentials);
		console.log("Form submitted");

		await RegisterUser(credentials);
		navigate("/user/login");
	};

	return (
		<>
			<Navbar />

			<section className="vh-100">
				<div className="container py-5 h-100">
					<div className="row d-flex align-items-center justify-content-center h-100">
						<div className="col-md-8 col-lg-7 col-xl-6">
							<img
								src="https://www.getillustrations.com/packs/plastic-illustrations-scene-builder-pack/scenes/_1x/accounts%20_%20man,%20workspace,%20desk,%20laptop,%20login,%20user_md.png"
								className="img-fluid"
								alt="Phone"
							/>
						</div>

						<div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
							<form
								style={{ width: "auto" }}
								onSubmit={handleSubmit}
							>
								<h2 style={{ letterSpacing: "1px" }}>
									Join us at Milan !!
								</h2>
								{/* //* First name ,last name */}
								<div className="form-outline mb-4">
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="First name"
										name="firstname"
										value={credentials.firstname}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="form-outline mb-4">
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="Last name"
										name="lastname"
										value={credentials.lastname}
										onChange={handleChange}
										required
									/>
								</div>
								{/* //* Email */}
								<div className="form-outline mb-4">
									<label
										htmlFor="email"
										className=" col-form-label col-form-label-lg"
									>
										Email address
									</label>

									<input
										type="email"
										className="form-control form-control-lg"
										id="email"
										aria-describedby="emailHelp"
										placeholder="Enter email"
										name="email"
										value={credentials.email}
										onChange={handleChange}
										required
									/>
								</div>
								{/* //* Password */}
								<div className="form-outline mb-4">
									<label
										htmlFor="exampleInputPassword1"
										className="col-form-label col-form-label-lg"
									>
										Password
									</label>

									<input
										type="password"
										className="form-control form-control-lg"
										id="password"
										placeholder="Password"
										name="password"
										value={credentials.password}
										onChange={handleChange}
										required
									/>
								</div>
								{/* //* Address */}
								<div className="form-outline mb-4">
									<label
										htmlFor="address"
										className="col-form-label col-form-label-lg"
									>
										Address
									</label>

									<input
										type="text"
										className="form-control form-control-lg"
										id="address"
										placeholder="Address"
										name="address"
										value={credentials.address}
										onChange={handleChange}
										required
									/>
								</div>
								{/* //* Pincode */}
								<div className="form-outline mb-4">
									<label
										htmlFor="pincode"
										className="col-form-label col-form-label-lg"
									>
										Pincode
									</label>

									<input
										type="text"
										className="form-control form-control-lg"
										id="pincode"
										placeholder="Pincode"
										name="pincode"
										value={credentials.pincode}
										onChange={handleChange}
										required
									/>
								</div>
								{/* <div className="form-check">
									<input
										type="checkbox"
										className="form-check-input"
										id="check"
									/>
									<label
										className="form-check-label"
										htmlFor="check"
									>
										Remember me
									</label>
								</div> */}
								<br />
								<button
									type="submit"
									className="btn btn-lg btn-block"
									disabled={
										credentials.password.length <= 4 ||
										!isEmailValid
									}
									style={{ backgroundColor: "#89b5f7" }}
								>
									Register
								</button>
								<br></br> <br></br>
								<Anchor
									para=""
									details="Forgot password?"
									link="#"
									className="text-muted"
								/>
								<Anchor
									para="Already have an account? "
									details="Login here"
									link="/user/login"
									className="link-info"
								/>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default UserRegister;
