import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);
	return (
		<div className={`header ${show && "header__black"}`}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
				alt="Netflix Logo"
				className="header__logo"
			/>

			<img src="" alt="" className="header__avatar" />
		</div>
	);
}

export default Header;
