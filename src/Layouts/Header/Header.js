import React, { Component } from "react";
import NavBar from "../Navbar/NavBar";
import KasaLogo from "../../Assets/Images/kasa.svg";
import "./Header.css";


export class Header extends Component {
	render() {
		return (
			<header className="">
				<div className="header-logo">
					<img src={KasaLogo} alt="Kasa Logo" />
				</div>
				<NavBar></NavBar>
			</header>
		);
	}
}

export default Header;