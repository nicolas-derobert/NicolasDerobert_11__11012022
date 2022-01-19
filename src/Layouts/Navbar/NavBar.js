import React from "react";
import "./Navbar.css";


function NavBar() {
	return (
		<section div className="navbar">
			<ul>
				<li>
					<a href="/accueil">Accueil</a>
				</li>
				<li>
					<a href="/apropos">A propos</a>
				</li>
			</ul>
		</section>
	);
}

export default NavBar;
