import React from "react";
import "./Login.css";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

const clientId =
	"88614967773-v3l790qd5fd8qlgvdhbcb7f8m7afehta.apps.googleusercontent.com";
const responseLogin = (response) => {
	console.log(response);
};

function Login() {
	return (
		<div className="login">
			<div className="login__container">
				<h1>登入</h1>
				<form className="login__form" action="">
					<input
						type="text"
						autofocus
						placeholder="Email or phone number"
						autoComplete="email"
					/>

					<input
						type="password"
						placeholder="Password"
						required
					/>
					<button
						className="login__signInBtn"
						type="submit">
						登入
					</button>
					<div className="login__action-and-help">
						<div className="login-remember-me">
							<input type="checkbox" name="" id="" />
							<label htmlFor="">
								<span>記住我</span>
							</label>
						</div>
						<p>需要協助?</p>
					</div>

					<div className="login__author">
						<FacebookLogin
							className="login-fb"
							autoLoad={true}
							// appId={}
							fields="name,email,picture"
							callback={responseLogin}
							icon="fa-facebook"
						/>

						<GoogleLogin
							className="login-google"
							autoComplete={true}
							clientId={clientId}
							onSuccess={"Google: " + responseLogin}
							onFailure={"Google: " + responseLogin}
						/>
					</div>
				</form>
				{/* <form action="" className="login__window">
				<h1>登入</h1>
				<input type="text" placeholder="email" />
				<input type="password" placeholder="password" />

				<button>登入</button>
				<div className="login__action-and-help">
					<div className="login-remeber-me">
						<input type="checkbox" name="" id="" />
						<span>記住我</span>
					</div>
					<p>需要協助?</p>
				</div>
			</form> */}
			</div>
		</div>
	);
}

export default Login;
